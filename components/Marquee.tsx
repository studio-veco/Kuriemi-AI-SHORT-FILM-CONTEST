
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface MarqueeProps {
  text?: string;
  className?: string;
  logos?: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "", logos }) => {
  const { t } = useLanguage();
  const content = text || t.marquee.text;

  return (
    <div className={`overflow-hidden border-t border-b border-accent/20 ${className}`}>
        <div className="marquee-container py-4">
            <div className="marquee-content flex items-center gap-12 md:gap-24">
                {logos ? (
                  <>
                    {logos.map((logo, i) => (
                      <img key={i} src={logo} alt="Partner Logo" className="h-8 md:h-12 w-auto object-contain opacity-80" />
                    ))}
                    {logos.map((logo, i) => (
                      <img key={`dup-${i}`} src={logo} alt="Partner Logo" className="h-8 md:h-12 w-auto object-contain opacity-80" />
                    ))}
                  </>
                ) : (
                  <>
                    <span className="text-2xl md:text-4xl font-thin text-white opacity-90 whitespace-nowrap">{content} {content}</span>
                    <span className="text-2xl md:text-4xl font-thin text-white opacity-90 whitespace-nowrap">{content} {content}</span>
                  </>
                )}
            </div>
        </div>
    </div>
  );
};

export default Marquee;
