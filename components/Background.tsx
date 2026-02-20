
import React, { useEffect, useRef } from 'react';

interface BackgroundProps {
  sectionIndex: number;
}

const vertexShaderSource = `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision highp float;

    uniform float u_time;
    uniform vec2 u_resolution;

    // パステルカラーの定義
    vec3 color1 = vec3(1.0, 0.85, 0.9);  // Soft Pink
    vec3 color2 = vec3(0.85, 0.9, 1.0);  // Soft Blue
    vec3 color3 = vec3(0.9, 1.0, 0.9);  // Soft Mint
    vec3 color4 = vec3(1.0, 0.95, 0.8); // Soft Peach

    void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float ratio = u_resolution.x / u_resolution.y;
        uv.x *= ratio;

        // スケールを少し大きくして、混ざり具合をゆったりさせる
        vec2 p = uv * 1.5;
        float t = u_time * 0.15;

        // ループ回数を減らし（10回→5回）、うねりの影響を大きくすることで
        // 細かく混ざりすぎるのを防ぐ
        for(int i = 1; i < 6; i++) {
            float f = float(i);
            p.x += 0.4 / f * sin(f * p.y + t + f * 1.2);
            p.y += 0.4 / f * sin(f * p.x + t + f * 0.8);
        }

        // 色の決定ロジック
        float v = sin(p.x + p.y);
        vec3 finalColor = vec3(0.0);
        
        // 領域ごとに色を割り当てることで「混ざりすぎ」を抑制
        if (v > 0.3) {
            finalColor = mix(color1, color4, smoothstep(0.3, 1.0, v));
        } else if (v < -0.3) {
            finalColor = mix(color2, color3, smoothstep(-1.0, -0.3, v));
        } else {
            // 境界部分
            finalColor = mix(color1, color2, smoothstep(-0.3, 0.3, v));
        }

        // 最後に少し明るさを整える
        gl_FragColor = vec4(finalColor * 1.02, 1.0);
    }
`;

export const Background: React.FC<BackgroundProps> = ({ sectionIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0,  1.0,
       1.0,  1.0,
      -1.0, -1.0,
       1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    function resize() {
      if (!canvas || !gl) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    function render(time: number) {
      if (!gl || !program) return;
      const t = time * 0.001;

      gl.clearColor(0.97, 0.97, 0.97, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLocation, t);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      gl.deleteBuffer(positionBuffer);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', width: '100vw', height: '100vh', background: 'transparent' }}
      />
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
    </div>
  );
};
