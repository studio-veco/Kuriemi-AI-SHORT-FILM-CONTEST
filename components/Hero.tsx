
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useLanguage } from '../context/LanguageContext';

const heroImages = [
  '/public/images/HS/HS01.webp',
  '/public/images/HS/HS02.webp',
  '/public/images/HS/HS03.webp',
  '/public/images/HS/HS04.webp',
  '/public/images/HS/HS05.webp',
  '/public/images/HS/HS06.webp',
  '/public/images/HS/HS07.webp',
  '/public/images/HS/HS08.webp',
  '/public/images/HS/HS09.webp',
  '/public/images/HS/HS10.webp',
  '/public/images/HS/HS11.webp',
  '/public/images/HS/HS12.webp',
  '/public/images/HS/HS13.webp',
  '/public/images/HS/HS14.webp',
  '/public/images/HS/HS15.webp',
  '/public/images/HS/HS16.webp',
  '/public/images/HS/HS17.webp',
  '/public/images/HS/HS18.webp',
  '/public/images/HS/HS19.webp',
  '/public/images/HS/HS20.webp',
];

const centerSequence = [
  ['/public/images/HS/k02.webp', '/public/images/HS/k04.webp'],
  ['/public/images/HS/k03.webp'],
  ['/public/images/HS/k05.webp', '/public/images/HS/k06.webp'],
  ['/public/images/HS/k07.webp'],
  ['/public/images/HS/k09.webp'],
];

interface HeroProps {
    loading?: boolean;
}

const Hero: React.FC<HeroProps> = ({ loading }) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [centerStepIndex, setCenterStepIndex] = useState(0);
  const mountRef = useRef<HTMLDivElement>(null);
  const targetRotationRef = useRef(0);
  const ringGroupRef = useRef<THREE.Group | null>(null);
  const centerGroupRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Center visual sequence interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterStepIndex((prev) => (prev + 1) % centerSequence.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Ring rotation
  useEffect(() => {
    if (loading) return;
    const spinTimer = setTimeout(() => { targetRotationRef.current += Math.PI * 2; }, 500);
    const angleStep = (Math.PI * 2) / 20; 
    const loopInterval = setInterval(() => { targetRotationRef.current += angleStep; }, 4000);
    return () => { clearTimeout(spinTimer); clearInterval(loopInterval); };
  }, [loading]);

  // Create Diamond Pattern Texture for Back side
  const createDiamondTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#dcb8c0'; // Accent color for diamond
    ctx.font = 'bold 160px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('♦', 128, 128);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const cameraDist = 50;
    camera.position.z = cameraDist; 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const centerGroup = new THREE.Group();
    scene.add(centerGroup);
    centerGroupRef.current = centerGroup;

    // 傾斜を管理する親グループ
    const tiltGroup = new THREE.Group();
    tiltGroup.rotation.z = -8 * (Math.PI / 180); // 右に8度上げる（Z軸固定）
    scene.add(tiltGroup);

    // 回転を管理する子グループ
    const ringGroup = new THREE.Group();
    tiltGroup.add(ringGroup);
    ringGroupRef.current = ringGroup;

    const textureLoader = new THREE.TextureLoader();
    const diamondTexture = createDiamondTexture();

    // Setup Ring
    const totalRingImages = 20;
    const radius = 28;
    const angleStep = (Math.PI * 2) / totalRingImages;
    const arcLength = ( (2 * Math.PI * radius) / totalRingImages ) * 0.8;
    const cylinderHeight = arcLength * (9 / 16); 
    const cylinderArc = (Math.PI * 2 / totalRingImages) * 0.8;

    for(let i=0; i<totalRingImages; i++){
        const src = heroImages[i % heroImages.length];
        const geometry = new THREE.CylinderGeometry(radius, radius, cylinderHeight, 32, 1, true, 0, cylinderArc);
        
        // 1つのカードを表裏で分けるためのマテリアル構成
        const materialFront = new THREE.MeshBasicMaterial({ side: THREE.FrontSide, transparent: true, opacity: 0.85 });
        const materialBack = new THREE.MeshBasicMaterial({ side: THREE.BackSide, map: diamondTexture, transparent: true, opacity: 0.85 });
        
        const cardContainer = new THREE.Group();
        const frontMesh = new THREE.Mesh(geometry, materialFront);
        const backMesh = new THREE.Mesh(geometry, materialBack);
        
        cardContainer.add(frontMesh);
        cardContainer.add(backMesh);
        
        cardContainer.rotation.y = angleStep * i + Math.PI; 
        ringGroup.add(cardContainer);
        
        textureLoader.load(src, (t) => { 
            t.colorSpace = THREE.SRGBColorSpace; 
            materialFront.map = t; 
            materialFront.needsUpdate = true; 
        });
    }

    let animationFrameId: number;
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (ringGroupRef.current) {
            const diff = targetRotationRef.current - ringGroupRef.current.rotation.y;
            if (Math.abs(diff) > 1.0) ringGroupRef.current.rotation.y = targetRotationRef.current;
            else ringGroupRef.current.rotation.y += diff * 0.05;
        }
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        if (!mountRef.current) return;
        const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
        camera.aspect = w / h; 
        camera.updateProjectionMatrix(); 
        renderer.setSize(w, h); 
    };
    window.addEventListener('resize', handleResize);

    return () => { 
        cancelAnimationFrame(animationFrameId); 
        window.removeEventListener('resize', handleResize); 
        renderer.dispose(); 
    };
  }, []);

  // Update center visuals when step index changes
  useEffect(() => {
    if (!centerGroupRef.current || !cameraRef.current || !rendererRef.current) return;

    const group = centerGroupRef.current;
    const camera = cameraRef.current;
    const textureLoader = new THREE.TextureLoader();
    const diamondTexture = createDiamondTexture();
    const currentImages = centerSequence[centerStepIndex];

    while(group.children.length > 0){
        const child = group.children[0] as THREE.Group;
        child.traverse((c: any) => {
            if(c.geometry) c.geometry.dispose();
            if(c.material) {
                if(Array.isArray(c.material)) c.material.forEach((m: any) => m.dispose());
                else c.material.dispose();
            }
        });
        group.remove(child);
    }

    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const cameraDist = camera.position.z;
    const visibleHeight = 2 * Math.tan(vFOV / 2) * cameraDist;
    const visibleWidth = visibleHeight * camera.aspect;
    const imgHeight = visibleHeight * 0.85;

    const loadTexture = (src: string) => new Promise<THREE.Texture>((resolve) => {
        textureLoader.load(src, (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            resolve(tex);
        }, undefined, () => {
            const dummy = new THREE.Texture();
            dummy.image = { width: 1, height: 1 }; 
            resolve(dummy);
        });
    });

    Promise.all(currentImages.map(src => loadTexture(src))).then(textures => {
        const widths = textures.map(t => {
            const img = t.image as any;
            if (img && img.width && img.height) {
                const aspect = img.width / img.height;
                return imgHeight * aspect;
            }
            return imgHeight * (3/4);
        });

        // ギャップの調整
        let gap = imgHeight * 0.01;
        // k01を削除したためインデックスを調整
        if (centerStepIndex === 0) gap = imgHeight * -0.15; // k02 & k04 をもっと近づける
        if (centerStepIndex === 2) gap = imgHeight * -0.05; // k05 & k06 を少し近づける

        const totalWidth = widths.reduce((sum, w) => sum + w, 0) + (widths.length - 1) * gap;
        let startX = -totalWidth / 2;
        let groupXOffset = -visibleWidth * 0.15;
        if (visibleWidth < visibleHeight) groupXOffset = 0;
        const posY = -visibleHeight / 2 + imgHeight / 2;

        let currentX = startX;
        textures.forEach((tex, i) => {
            const w = widths[i];
            const cardItem = new THREE.Group();
            
            const geometry = new THREE.PlaneGeometry(w, imgHeight);
            const materialFront = new THREE.MeshBasicMaterial({ map: tex, side: THREE.FrontSide, transparent: true, opacity: 0 });
            const materialBack = new THREE.MeshBasicMaterial({ map: diamondTexture, side: THREE.BackSide, transparent: true, opacity: 0 });
            
            const frontMesh = new THREE.Mesh(geometry, materialFront);
            const backMesh = new THREE.Mesh(geometry, materialBack);
            
            cardItem.add(frontMesh);
            cardItem.add(backMesh);
            
            const meshX = currentX + w / 2;
            cardItem.position.set(groupXOffset + meshX, posY, 0);
            group.add(cardItem);
            
            let start = performance.now();
            const duration = 1000;
            const animateFade = (time: number) => {
                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1.0);
                materialFront.opacity = progress;
                materialBack.opacity = progress;
                if (progress < 1.0) requestAnimationFrame(animateFade);
            };
            requestAnimationFrame(animateFade);
            currentX += w + gap;
        });
        
        if (ringGroupRef.current) {
            ringGroupRef.current.position.set(groupXOffset, posY, 0);
        }
    });

  }, [centerStepIndex, loading]);

  return (
    <>
    <header className="relative h-screen w-full overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {heroImages.map((src, index) => (
                <div key={src} className={`absolute inset-0 w-full h-full transition-all duration-[4000ms] ${index === currentIndex ? 'opacity-40 blur-sm scale-100' : 'opacity-0 blur-2xl scale-110'}`}>
                    <img src={src} className="w-full h-full object-cover" alt=""/>
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 md:to-transparent"></div>
        </div>
        
        {/* Three.js Canvas */}
        <div ref={mountRef} className="absolute inset-0 z-10 pointer-events-none"/>
        
        {/* Content Area */}
        <div className="relative z-30 h-full w-full md:w-1/2 md:ml-auto flex flex-col pt-32 md:pt-0 px-6 md:pr-16 pointer-events-none md:items-end md:justify-center">
            <div className="w-full md:w-auto md:text-right pointer-events-auto">
                <div className="text-center md:text-right">
                    <p className="text-white text-xs md:text-lg tracking-[0.8em] mb-4 reveal-text delay-200 uppercase font-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                         {t.hero.catchphrase}
                    </p>
                    <h1 className="relative font-black leading-none tracking-tight text-white mb-6 md:mb-8 reveal-text delay-300 drop-shadow-[0_10px_40px_rgba(0,0,0,1)]">
                        <span className="block text-5xl md:text-8xl lg:text-[9rem] tracking-tighter">KURIEMI</span>
                        <span className="block text-2xl md:text-5xl italic font-serif text-accent mt-2 opacity-100">{t.hero.expansion}</span>
                    </h1>
                    <p className="text-sm md:text-lg font-bold tracking-[0.2em] uppercase text-white mb-6 reveal-text delay-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                        {t.hero.project}
                    </p>
                    {/* スマホのみ中央寄せに修正 */}
                    <p className="text-[clamp(1.1rem,4.5vw,2.25rem)] md:text-4xl font-bold tracking-[0.05em] leading-tight reveal-text delay-500 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,1)] max-w-full md:max-w-xl md:ml-auto whitespace-pre opacity-100 bg-black/30 md:bg-transparent p-4 md:p-0 overflow-hidden text-center md:text-right">
                        {t.hero.description}
                    </p>
                </div>
                
                {/* Actions - スマホで横幅を縮小し中央寄せ */}
                <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:justify-end reveal-text delay-700">
                    <a href="#" className="w-fit min-w-[160px] mx-auto md:mr-0 px-6 py-4 bg-black border-2 border-accent text-white text-xs md:text-base tracking-widest font-black uppercase hover:bg-accent hover:text-black transition-all shadow-[0_0_30px_rgba(220,184,192,0.4)] text-center scale-100">
                        {t.common.submit}
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-0 w-full z-40 flex justify-center pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col items-center gap-4 text-white reveal-text delay-1000">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold">{t.hero.scroll}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </div>
    </header>
    </>
  );
};

export default Hero;
