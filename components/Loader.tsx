import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Loader: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div id="loader" className="fixed inset-0 z-[10000] bg-[var(--bg-color)] flex items-center justify-center transition-opacity duration-1000">
        <div className="text-center">
            <h1 className="text-2xl tracking-[0.5em] animate-pulse text-[var(--text-color)] uppercase">{t.common.loading}</h1>
        </div>
    </div>
  );
};

export default Loader;