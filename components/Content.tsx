
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WhatIsThis: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 px-6 relative">
             <div className="max-w-4xl mx-auto text-center reveal-text">
                <h2 className="text-3xl md:text-5xl mb-12 tracking-widest uppercase">{t.whatIsThis.title}</h2>
                <div className="p-8 md:p-12 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 shadow-sm inline-block mb-12 text-left">
                    <p 
                      className="text-base md:text-lg font-medium leading-loose whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: t.whatIsThis.desc }}
                    />
                </div>

                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-16 bg-black border border-white/20">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="KURIEMI AI SHORT FILM CONTEST Teaser"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-8">
                    <a href="#" className="btn-primary inline-block px-20 py-6 text-xl tracking-widest uppercase shadow-xl hover:scale-105 transition-transform bg-black text-white hover:bg-accent hover:text-black">
                        {t.common.submit}
                    </a>
                </div>
            </div>
        </section>
    );
};

export const About: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl mb-12 md:mb-20 reveal-text tracking-widest uppercase text-center">{t.about.title}</h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="reveal-text order-2 md:order-1 flex justify-center">
                        <a 
                            href="https://bookplus.nikkei.com/atcl/catalog/24/02/06/01254/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/30 animate-float bg-white/10 backdrop-blur-sm transform rotate-[5deg]"
                        >
                             <img 
                                src="/public/images/contents/book.webp" 
                                alt="Creators' Wonderland Book" 
                                className="w-full h-full object-cover"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x600/ede0e3/5c4b51?text=CONCEPT'; }}
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-2">
                        <div className="relative p-8 md:p-12 w-full reveal-text backdrop-blur-sm bg-white/20 rounded-xl shadow-sm border border-white/30">
                            <p className="text-lg md:text-2xl font-serif font-medium leading-loose md:leading-loose whitespace-pre-wrap text-[var(--text-color)]">
                                {t.about.quote}
                            </p>
                            <div className="mt-8 text-sm md:text-base font-bold text-accent tracking-widest">
                                {t.about.author}
                            </div>
                            
                            <div className="mt-12 pt-12 border-t border-white/30">
                                <p className="text-sm md:text-base font-medium leading-loose opacity-90 whitespace-pre-wrap text-left md:text-right text-[var(--text-color)]">{t.about.conceptDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(5deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export const Profile: React.FC = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/public/images/kuriemi_seq/0000.webp",
        "/public/images/kuriemi_seq/0003.webp", 
        "/public/images/kuriemi_seq/0006.webp"
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const winH = window.innerHeight;
            const start = winH;
            const end = -rect.height;
            const progress = 1 - (rect.top - end) / (start - end);
            
            let idx = 0;
            if (progress < 0.33) idx = 0;
            else if (progress < 0.66) idx = 1;
            else idx = 2;

            setCurrentImageIndex(idx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="profile" ref={containerRef} className="relative text-white overflow-hidden py-32 flex items-center justify-center min-h-[150vh]">
             <div className="absolute inset-0 w-full h-full">
                {images.map((src, index) => (
                    <img 
                        key={src}
                        src={src} 
                        alt="" 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${index === currentImageIndex ? 'opacity-70' : 'opacity-0'}`} 
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="reveal-text">
                    <h2 className="text-5xl md:text-8xl font-thin mb-8 tracking-tighter leading-none">
                        WHO IS<br /><span className="text-accent italic font-serif">KURIEMI?</span>
                    </h2>
                    <div className="w-20 h-[1px] bg-accent mb-8"></div>
                    <p className="text-xs tracking-[0.3em] text-accent uppercase mb-6">{t.profile.role}</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 border border-white/10 reveal-text rounded-lg">
                    <p className="text-base md:text-lg leading-loose opacity-90 font-light text-justify mb-10 whitespace-pre-wrap">
                        {t.profile.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-8 text-xs opacity-60 font-mono pt-8 border-t border-white/20">
                        <div>
                            <span className="block text-accent mb-2 uppercase">Role</span>
                            {t.profile.job}
                        </div>
                        <div>
                            <span className="block text-accent mb-2 uppercase">Links</span>
                            <div className="flex flex-col gap-3 mt-1">
                                <a href="https://pinyo.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors border-b border-white/30 pb-0.5 inline-block">
                                    Official Website
                                </a>
                                <div className="flex gap-4 mt-1 text-lg">
                                    <a href="https://x.com/kurita__emi?lang=ja" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="X (Twitter)">
                                        <i className="fab fa-x-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/kurita__emi/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Judges: React.FC = () => {
    const { t } = useLanguage();
    const [selectedJudge, setSelectedJudge] = useState<any>(null);
    const [isClosing, setIsClosing] = useState(false);
    
    const judgesData = [
        { id: 1, name: t.judges.judge4Name, role: t.judges.judge4Role, img: "/public/images/contents/osamu_s.webp", desc: t.judges.judge4Desc },
        { id: 2, name: t.judges.judge5Name, role: t.judges.judge5Role, img: "/public/images/contents/naka.webp", desc: t.judges.judge5Desc },
        { id: 3, name: t.judges.judge2Name, role: t.judges.judge2Role, img: "/public/images/contents/kuriemi1.webp", desc: t.judges.judge2Desc },
        { id: 4, name: t.judges.judge1Name, role: t.judges.judge1Role, img: "/public/images/contents/toya.webp", desc: t.judges.judge1Desc },
        { id: 5, name: t.judges.judge3Name, role: t.judges.judge3Role, img: "/public/images/contents/inoue1.webp", desc: t.judges.judge3Desc },
        { id: 6, name: t.judges.judge6Name, role: t.judges.judge6Role, img: "/public/images/contents/Yves.webp", desc: t.judges.judge6Desc },
        { id: 7, name: t.judges.judge7Name, role: t.judges.judge7Role, img: "/public/images/contents/Matty.webp", desc: t.judges.judge7Desc },
        { id: 8, name: t.judges.judge8Name, role: t.judges.judge8Role, img: "/public/images/contents/shirai.webp", desc: t.judges.judge8Desc },
        { id: 9, name: t.judges.judge9Name, role: t.judges.judge9Role, img: "/public/images/contents/okamoto.webp", desc: t.judges.judge9Desc }
    ];

    useEffect(() => {
        if (selectedJudge && !isClosing) {
            const displacement = document.getElementById('liquidDisplacement') as any;
            if (!displacement) return;
            let start: number | null = null;
            const duration = 1000;
            const startScale = 60;
            const animate = (time: number) => {
                if (!start) start = time;
                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const currentScale = startScale * (1 - eased);
                displacement.setAttribute('scale', currentScale.toString());
                if (progress < 1) requestAnimationFrame(animate);
                else displacement.setAttribute('scale', '0');
            };
            requestAnimationFrame(animate);
        }
    }, [selectedJudge, isClosing]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => { 
            setSelectedJudge(null); 
            setIsClosing(false); 
            const displacement = document.getElementById('liquidDisplacement') as any;
            if (displacement) displacement.setAttribute('scale', '0');
        }, 700); 
    };

    return (
        <section id="judges" className="py-24 md:py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-24 text-center reveal-text tracking-widest uppercase">{t.judges.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
                    {judgesData.map((judge) => (
                        <div key={judge.id} className="text-center reveal-text cursor-pointer group" onClick={() => setSelectedJudge(judge)}>
                            <div className="aspect-[3/4] overflow-hidden mb-6 border border-white/50 bg-white/30 relative shadow-md backdrop-blur-sm rounded-lg transition-transform duration-300 hover:-translate-y-2">
                                <img src={judge.img} alt={judge.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x400/ede0e3/5c4b51?text=JUDGE'; }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{judge.name}</h3>
                            <p className="text-[10px] md:text-xs text-accent uppercase tracking-widest leading-tight px-2 font-bold">{judge.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            {selectedJudge && (
                <div className={`fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleClose}>
                    <div className={`bg-[var(--bg-color)] p-8 md:p-12 max-w-2xl w-full relative shadow-2xl border border-accent liquid-modal-content transition-all duration-700 ${isClosing ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0 liquid-enter'}`} onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-8 text-3xl hover:text-accent transition-colors" onClick={handleClose}>&times;</button>
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent shadow-inner">
                                <img src={selectedJudge.img} alt={selectedJudge.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x400/ede0e3/5c4b51?text=JUDGE'; }} />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedJudge.name}</h3>
                                <p className="text-xs md:text-sm text-accent uppercase tracking-[0.15em] mb-6 font-bold">{selectedJudge.role}</p>
                                <p className="text-sm md:text-base leading-loose opacity-80 font-light whitespace-pre-wrap">{selectedJudge.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export const Inspiration: React.FC = () => {
    const { t } = useLanguage();
    const samples = [{ id: 'yGE-zrMLMhA' }, { id: 'ND-3sWFl10k' }];
    return (
        <section id="inspiration" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-8 reveal-text tracking-widest text-center">{t.inspiration.title}</h2>
                <p className="text-center max-w-2xl mx-auto mb-20 opacity-80 leading-loose reveal-text">{t.inspiration.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {samples.map((video, i) => (
                        <div key={i} className="reveal-text">
                            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-white/20">
                                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 md:mt-16 reveal-text">
                    <a href="#" className="inline-block border-b border-[var(--text-color)] pb-1 hover:text-accent hover:border-accent transition-colors">{t.inspiration.moreBtn}</a>
                </div>
            </div>
        </section>
    );
};

export const Categories: React.FC = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleRequirements = () => setIsOpen(!isOpen);

    const cardClass = "relative w-full flex-shrink-0 md:w-auto border border-white/40 p-8 md:p-12 bg-white/40 backdrop-blur-md reveal-text flex flex-col rounded-xl shadow-sm";
    const badgeClass = "absolute top-0 right-0 bg-accent text-white text-xs px-3 py-1 font-bold rounded-bl-lg";

    return (
        <section id="categories" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-3xl md:text-6xl mb-12 md:mb-24 reveal-text tracking-widest">{t.categories.title}</h2>
                <div className="flex md:hidden justify-center gap-6 mb-12 reveal-text relative z-10">
                    <button onClick={() => setActiveTab(0)} className={`text-sm tracking-widest pb-2 transition-all ${activeTab === 0 ? 'text-[var(--text-color)] border-b border-[var(--text-color)] font-bold' : 'text-gray-400 border-transparent'}`}>01. CASUAL</button>
                    <button onClick={() => setActiveTab(1)} className={`text-sm tracking-widest pb-2 transition-all ${activeTab === 1 ? 'text-[var(--text-color)] border-b border-[var(--text-color)] font-bold' : 'text-gray-400 border-transparent'}`}>02. CINEMA</button>
                </div>
                <div className="flex md:grid md:grid-cols-2 md:gap-24 transition-transform duration-500 ease-out transform translate-x-[var(--tx)] md:translate-x-0 md:transform-none" style={{ '--tx': `-${activeTab * 100}%` } as React.CSSProperties}>
                    <div className={cardClass}>
                        <div className={badgeClass}>01</div>
                        <div className="mb-6 overflow-hidden rounded-lg aspect-video border border-white/20">
                            <img src="/public/images/contents/short.webp" alt="10s Challenge" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">{t.categories.cat1Title}</h3>
                        <p className="text-sm text-accent tracking-widest mb-6">{t.categories.cat1Subtitle}</p>
                        <p className="text-base leading-loose mb-8 opacity-80">{t.categories.cat1Desc}</p>
                        <div className="mt-auto border-t border-accent/20 pt-6">
                            <button onClick={toggleRequirements} className="w-full flex justify-between items-center text-xs font-bold tracking-widest hover:text-accent transition-colors">
                                <span>{isOpen ? t.categories.closeRequirements : t.categories.viewRequirements}</span>
                                <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                                <ul className="text-sm space-y-2 list-disc list-inside opacity-80 font-light">
                                    {t.categories.cat1Requirements.map((req, i) => <li key={i}>{req}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cardClass}>
                        <div className={badgeClass}>02</div>
                        <div className="mb-6 overflow-hidden rounded-lg aspect-video border border-white/20">
                            <img src="/public/images/contents/long.webp" alt="Short Film" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">{t.categories.cat2Title}</h3>
                        <p className="text-sm text-accent tracking-widest mb-6">{t.categories.cat2Subtitle}</p>
                        <p className="text-base leading-loose mb-8 opacity-80">{t.categories.cat2Desc}</p>
                        <div className="mt-auto border-t border-accent/20 pt-6">
                            <button onClick={toggleRequirements} className="w-full flex justify-between items-center text-xs font-bold tracking-widest hover:text-accent transition-colors">
                                <span>{isOpen ? t.categories.closeRequirements : t.categories.viewRequirements}</span>
                                <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                                <ul className="text-sm space-y-2 list-disc list-inside opacity-80 font-light">
                                    {t.categories.cat2Requirements.map((req, i) => <li key={i}>{req}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Schedule: React.FC = () => {
    const { t } = useLanguage();
    const steps = [
        { date: t.schedule.step2Date, title: t.schedule.step2Title, desc: t.schedule.step2Desc, active: true },
        { date: t.schedule.step3Date, title: t.schedule.step3Title, desc: t.schedule.step3Desc },
        { date: t.schedule.step4Date, title: t.schedule.step4Title, desc: t.schedule.step4Desc },
        { date: t.schedule.step5Date, title: t.schedule.step5Title, desc: t.schedule.step5Desc },
    ];
    return (
        <section id="schedule" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-20 text-center reveal-text">{t.schedule.title}</h2>
                <div className="relative border-l border-accent/30 ml-4 md:ml-0 space-y-16">
                    {steps.map((step, i) => (
                        <div key={i} className={`relative pl-12 reveal-text ${step.active ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full ${step.active ? 'bg-accent shadow-[0_0_10px_#dcb8c0]' : 'bg-gray-300'}`}></div>
                            <span className="block text-xs font-mono text-accent mb-2">{step.date}</span>
                            <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Prizes: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="prizes" className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl mb-12 reveal-text tracking-widest">{t.prizes.title}</h2>
                <div className="mb-16 reveal-text flex items-center justify-center gap-4 md:gap-12">
                    <h3 className="text-4xl md:text-6xl font-black text-accent tracking-tighter">{t.prizes.totalPrize}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/50 p-10 border-2 border-accent shadow-xl reveal-text relative overflow-hidden backdrop-blur-md rounded-xl">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs px-4 py-1 font-bold rounded-bl-lg">No.1</div>
                        <div className="text-5xl mb-6 text-accent"><i className="fas fa-trophy"></i></div>
                        <h3 className="text-2xl font-bold mb-2">{t.prizes.grandPrizeTitle}</h3>
                        <p className="text-3xl font-black mb-2">{t.prizes.grandPrizeAmount}</p>
                        <p className="text-xs opacity-60 mb-4">{t.prizes.grandPrizeNote}</p>
                        <div className="border-t border-accent/20 pt-4 mt-4"><p className="font-bold text-accent">{t.prizes.grandPrizeExtra}</p></div>
                    </div>
                    <div className="bg-white/40 p-10 border border-white/40 shadow-lg reveal-text flex flex-col justify-center backdrop-blur-md rounded-xl">
                         <div className="text-4xl mb-6 text-accent/80"><i className="fas fa-medal"></i></div>
                        <h3 className="text-xl font-bold mb-2">{t.prizes.excellencePrizeTitle}</h3>
                        <p className="text-2xl font-black mb-2">{t.prizes.excellencePrizeAmount}</p>
                        <p className="text-xs opacity-60">{t.prizes.excellencePrizeNote}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-text">
                    <div className="bg-white/30 p-8 border border-white/40 backdrop-blur-sm rounded-lg">
                        <h3 className="font-bold mb-2 text-lg">{t.prizes.judgesPrizeTitle}</h3>
                        <p className="text-xl font-bold mb-2">{t.prizes.judgesPrizeAmount}</p>
                        <p className="text-sm opacity-70">{t.prizes.judgesPrizeDesc}</p>
                    </div>
                    <div className="bg-white/30 p-8 border border-white/40 backdrop-blur-sm rounded-lg">
                        <h3 className="font-bold mb-2 text-lg">{t.prizes.nomineePrizeTitle}</h3>
                        <p className="text-xl font-bold">{t.prizes.nomineePrizeAmount}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Partners: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="partners" className="py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-sm tracking-[0.3em] mb-16 text-accent uppercase font-black">{t.partners.title}</h2>
                <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="/public/images/contents/logo_1_11.svg" className="h-12 md:h-16" alt="Partner 1" />
                    <img src="/public/images/contents/logo_2_way.svg" className="h-12 md:h-16" alt="Partner 2" />
                    <img src="/public/images/contents/logo_3_onoma.webp" className="h-12 md:h-16" alt="Partner 3" />
                    <img src="/public/images/contents/logo_4_nk.svg" className="h-12 md:h-16" alt="Partner 4" />
                </div>
            </div>
        </section>
    );
};

export const CallToAction: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="cta" className="py-24 px-6 bg-accent/5">
            <div className="max-w-4xl mx-auto text-center reveal-text">
                <h2 className="text-3xl md:text-5xl mb-8 tracking-widest uppercase">{t.cta.title}</h2>
                <div className="mt-12">
                    <a href="#" className="btn-primary inline-block px-20 py-6 text-xl tracking-widest uppercase shadow-xl hover:scale-105 transition-transform bg-black text-white hover:bg-accent hover:text-black">
                        {t.cta.btn}
                    </a>
                    <p className="mt-4 text-xs opacity-60 uppercase tracking-widest">{t.cta.note}</p>
                </div>
            </div>
        </section>
    );
};

export const EntryProcess: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="howto" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-20 text-center reveal-text">{t.entry.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 reveal-text">
                    {[
                        { num: "01", title: t.entry.step1Title, desc: t.entry.step1Desc },
                        { num: "02", title: t.entry.step2Title, desc: t.entry.step2Desc },
                        { num: "03", title: t.entry.step3Title, desc: t.entry.step3Desc },
                        { num: "04", title: t.entry.step4Title, desc: t.entry.step4Desc }
                    ].map((step, i) => (
                        <div key={i} className="relative p-8 border border-dashed border-accent/50 bg-white/20 backdrop-blur-sm rounded-lg">
                            <div className="text-4xl font-thin text-accent mb-4">{step.num}</div>
                            <h3 className="text-lg font-bold mb-4">{step.title}</h3>
                            <p className="text-sm opacity-80 leading-relaxed whitespace-pre-wrap">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Message: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="message" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center reveal-text">
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">{t.message.title}</h2>
                <h3 className="text-xl md:text-2xl text-accent font-serif italic mb-12">{t.message.subtitle}</h3>
                <div className="p-8 md:p-12 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 shadow-sm text-left">
                    <p className="text-base md:text-lg leading-loose whitespace-pre-wrap opacity-90">
                        {t.message.desc}
                    </p>
                </div>
            </div>
        </section>
    );
};

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-accent/10 py-4 reveal-text">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left group">
                <span className="text-sm md:text-base font-bold pr-4 flex items-start">
                    <span className="text-accent mr-3">Q.</span>{q}
                </span>
                <i className={`fas fa-chevron-down text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm md:text-base opacity-70 pl-8 leading-loose whitespace-pre-wrap"><span className="text-accent font-bold mr-2">A.</span>{a}</p>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="faq" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-16 text-center reveal-text">{t.faq.title}</h2>
                <div className="space-y-12">
                    {t.faq.categories.map((cat, i) => (
                        <div key={i}>
                            <h3 className="text-lg md:text-xl font-black mb-6 border-l-4 border-accent pl-4">{cat.title}</h3>
                            <div className="bg-white/40 backdrop-blur-md rounded-xl p-6 md:p-8">
                                {cat.items.map((item, j) => <FAQItem key={j} q={item.q} a={item.a} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface FooterProps {
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTermsClick, onPrivacyClick }) => {
    const { t } = useLanguage();
    
    const handleTerms = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onTermsClick) onTermsClick();
    };

    const handlePrivacy = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onPrivacyClick) onPrivacyClick();
    };

    return (
        <footer className="pt-24 pb-12 px-6 border-t border-accent text-xs bg-white/10 backdrop-blur-md">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                <div>
                    <h4 className="font-bold mb-6 tracking-widest">{t.footer.warningsTitle}</h4>
                    <ul className="space-y-3 opacity-70 leading-relaxed list-none">{t.footer.warnings.map((w, i) => <li key={i}>{w}</li>)}</ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6 tracking-widest">{t.footer.rightsTitle}</h4>
                    <ul className="space-y-3 opacity-70 leading-relaxed list-none">{t.footer.rights.map((r, i) => <li key={i}>{r}</li>)}</ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto text-center border-t border-accent/30 pt-12">
                <div className="flex flex-wrap justify-center gap-8 mb-8 font-medium opacity-80">
                    <a href="#" onClick={handleTerms} className="hover:text-accent transition-colors">{t.footer.links.terms}</a>
                    <a href="#" onClick={handlePrivacy} className="hover:text-accent transition-colors">{t.footer.links.privacy}</a>
                    <a href="#" className="hover:text-accent transition-colors">{t.footer.links.guide}</a>
                    <a href="#" className="hover:text-accent transition-colors">{t.footer.links.contact}</a>
                </div>
                <div className="text-2xl font-bold tracking-widest mb-4 uppercase">KURIEMI AI SHORT FILM CONTEST</div>
            </div>
        </footer>
    );
};
