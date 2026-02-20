
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import StarParticles from './components/StarParticles';
import { Background } from './components/Background';
import { 
  WhatIsThis,
  About, 
  Profile, 
  Inspiration, 
  Categories, 
  Schedule, 
  Judges, 
  Prizes, 
  Partners, 
  CallToAction, 
  EntryProcess, 
  Message,
  FAQ, 
  Footer 
} from './components/Content';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

type PageView = 'home' | 'terms' | 'privacy';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [view, setView] = useState<PageView>('home');
  const { t } = useLanguage();

  const partnerLogos = [
    '/public/images/contents/logo_1_11.svg',
    '/public/images/contents/logo_2_way.svg',
    '/public/images/contents/logo_3_onoma.webp',
    '/public/images/contents/logo_4_nk.svg'
  ];

  // Page view navigation helper
  const navigateTo = (newView: PageView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || view !== 'home') return;
    
    const animObserverOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const animObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, animObserverOptions);

    const elements = document.querySelectorAll('.reveal-text:not(.static), .line-anim');
    elements.forEach(el => animObserver.observe(el));
    
    setTimeout(() => {
      const initialElements = document.querySelectorAll('.reveal-text:not(.static), .line-anim');
      initialElements.forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('active');
      });
    }, 100);

    const sectionObserverOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const sections = document.querySelectorAll('main > section, header');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target as Element);
          if (index !== -1) setCurrentSectionIndex(index);
        }
      });
    }, sectionObserverOptions);

    sections.forEach(s => sectionObserver.observe(s));

    return () => {
      elements.forEach(el => animObserver.unobserve(el));
      animObserver.disconnect();
      sections.forEach(s => sectionObserver.unobserve(s));
      sectionObserver.disconnect();
    };
  }, [loading, view]);

  return (
    <>
      <Background sectionIndex={currentSectionIndex} />
      <StarParticles />
      <div className="noise-overlay"></div>
      
      {loading && <Loader />}
      
      <Navigation visible={!loading} onLogoClick={() => navigateTo('home')} />
      
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        {view === 'home' ? (
          <>
            <Hero loading={loading} />
            <Marquee logos={partnerLogos} className="bg-white py-2" />
            <About />
            <WhatIsThis />
            <Profile />
            {/* ハッシュタグ帯: テキスト色を白に修正 */}
            <Marquee className="bg-[#f8d7da] py-2" text={t.marquee.text} />
            
            {/* 並び替えセクション */}
            <Categories />
            <Prizes />
            <Inspiration />
            <EntryProcess />
            
            {/* 以降元のまま */}
            <Schedule />
            <Judges />
            <Partners />
            <CallToAction />
            <Message />
            <FAQ />
          </>
        ) : view === 'terms' ? (
          <TermsPage />
        ) : (
          <PrivacyPage />
        )}
      </main>

      <Footer onTermsClick={() => navigateTo('terms')} onPrivacyClick={() => navigateTo('privacy')} />
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
