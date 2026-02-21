
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavigationProps {
  visible: boolean;
  onLogoClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ visible, onLogoClick }) => {
  const { t, locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLogoClick) onLogoClick();
    setIsOpen(false);
  };

  const submitLink = "https://www.creators-wonderland.com";

  return (
    <>
      <nav className={`fixed w-full z-[100] px-6 py-4 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-accent shadow-sm transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="text-sm md:text-lg font-black tracking-widest uppercase flex items-center gap-2 text-[var(--text-color)] hover:text-accent transition-colors"
          >
              KURIEMI AI SHORT FILM CONTEST
          </a>
          
          <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-2 text-xs font-bold">
                  {['ja', 'en', 'zh'].map((lang) => (
                    <React.Fragment key={lang}>
                      <button 
                          onClick={() => setLocale(lang as any)} 
                          className={`hover:text-accent transition-colors uppercase ${locale === lang ? 'text-accent border-b border-accent' : 'text-gray-400'}`}
                      >
                          {lang}
                      </button>
                      {lang !== 'zh' && <span className="text-gray-200">/</span>}
                    </React.Fragment>
                  ))}
              </div>

              <div className="hidden md:flex gap-8 text-sm tracking-widest font-bold items-center text-[var(--text-color)]">
                  <a href="#about" className="hover:text-accent transition-colors">{t.nav.about}</a>
                  <a href="#inspiration" className="hover:text-accent transition-colors">{t.nav.inspiration}</a>
                  <a href="#schedule" className="hover:text-accent transition-colors">{t.nav.schedule}</a>
                  <a href="#judges" className="hover:text-accent transition-colors">{t.nav.judges}</a>
                  <a href={submitLink} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2.5 text-xs tracking-widest uppercase shadow-md">{t.nav.submitBtn}</a>
              </div>

              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden flex flex-col gap-1.5 p-2 z-[110]"
                aria-label="Toggle Menu"
              >
                <span className={`w-6 h-0.5 bg-[var(--text-color)] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-[var(--text-color)] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-[var(--text-color)] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
          </div>
      </nav>

      <div className={`fixed inset-0 z-[90] bg-white transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-12 pt-32 gap-10">
          <div className="flex flex-col gap-6 text-2xl font-bold tracking-[0.2em] text-[var(--text-color)]">
            <a href="#about" onClick={handleLinkClick} className="border-b border-accent/20 pb-4">{t.nav.about}</a>
            <a href="#inspiration" onClick={handleLinkClick} className="border-b border-accent/20 pb-4">{t.nav.inspiration}</a>
            <a href="#schedule" onClick={handleLinkClick} className="border-b border-accent/20 pb-4">{t.nav.schedule}</a>
            <a href="#judges" onClick={handleLinkClick} className="border-b border-accent/20 pb-4">{t.nav.judges}</a>
          </div>
          
          <div className="mt-auto space-y-8">
            <div className="flex gap-6 text-sm font-bold justify-center">
                {['ja', 'en', 'zh'].map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => { setLocale(lang as any); }} 
                    className={`px-4 py-2 border uppercase ${locale === lang ? 'bg-accent text-white border-accent' : 'border-gray-200 text-gray-400'}`}
                  >
                    {lang === 'ja' ? '日本語' : lang === 'en' ? 'English' : '中文'}
                  </button>
                ))}
            </div>
            <a href={submitLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[var(--text-color)] text-white py-5 text-lg font-bold tracking-widest uppercase shadow-xl">
              {t.nav.submitBtn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
