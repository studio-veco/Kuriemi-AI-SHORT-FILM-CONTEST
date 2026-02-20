import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface WaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitingListModal: React.FC<WaitingListModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    x_account: '',
    discord_account: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen && !isClosing) {
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
  }, [isOpen, isClosing]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => { 
        onClose(); 
        setIsClosing(false); 
        setStatus('idle');
        setFormData({ name: '', email: '', x_account: '', discord_account: '' });
        const displacement = document.getElementById('liquidDisplacement') as any;
        if (displacement) displacement.setAttribute('scale', '0');
    }, 700); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
        // Use FormData instead of JSON for better stability with FormSubmit
        const body = new FormData();
        body.append('name', formData.name);
        body.append('email', formData.email);
        body.append('x_account', formData.x_account || 'N/A');
        body.append('discord_account', formData.discord_account || 'N/A');
        
        // Configuration fields
        body.append('_subject', '【KURIEMI Contest】New Waiting List Entry');
        body.append('_template', 'table');
        body.append('_captcha', 'false'); // Disable captcha for AJAX

        const response = await fetch('https://formsubmit.co/ajax/info@veco.jp', {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json'
                // Do not set Content-Type header when using FormData, browser sets it with boundary
            }
        });

        const result = await response.json();
        
        if (response.ok && (result.success === 'true' || result.success === true)) {
            setStatus('success');
            setTimeout(handleClose, 2500);
        } else {
            console.error('FormSubmit Error:', result);
            setStatus('error');
        }
    } catch (error) {
        console.error('Network Error:', error);
        setStatus('error');
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleClose}>
        <div 
            className={`bg-white p-8 md:p-12 max-w-xl w-full relative shadow-2xl border border-accent liquid-modal-content transition-all duration-700 ${isClosing ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0 liquid-enter'}`} 
            onClick={(e) => e.stopPropagation()}
        >
            <button className="absolute top-6 right-8 text-3xl hover:text-accent transition-colors text-black" onClick={handleClose}>&times;</button>
            
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-black tracking-widest text-black mb-4 uppercase">{t.waitingList.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed font-bold">{t.waitingList.desc}</p>
            </div>

            {status === 'success' ? (
                <div className="py-12 text-center">
                    <div className="text-accent font-black text-xl animate-bounce mb-2">
                        {t.common.success}
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Successfully Registered</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                            {t.waitingList.name} <span className="text-accent text-[10px] ml-2">[{t.waitingList.required}]</span>
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            required 
                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-accent transition-colors"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                            {t.waitingList.email} <span className="text-accent text-[10px] ml-2">[{t.waitingList.required}]</span>
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            required 
                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-accent transition-colors"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                {t.waitingList.xAccount} <span className="text-gray-300 text-[10px] ml-2">[{t.waitingList.optional}]</span>
                            </label>
                            <input 
                                type="text" 
                                name="x_account"
                                placeholder="@username"
                                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-accent transition-colors"
                                value={formData.x_account}
                                onChange={(e) => setFormData({...formData, x_account: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                {t.waitingList.discordAccount} <span className="text-gray-300 text-[10px] ml-2">[{t.waitingList.optional}]</span>
                            </label>
                            <input 
                                type="text" 
                                name="discord_account"
                                placeholder="username#0000"
                                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-black focus:outline-none focus:border-accent transition-colors"
                                value={formData.discord_account}
                                onChange={(e) => setFormData({...formData, discord_account: e.target.value})}
                            />
                        </div>
                    </div>

                    {status === 'error' && (
                        <div className="bg-red-50 p-4 border border-red-100">
                           <p className="text-red-500 text-xs text-center font-bold">{t.common.error}</p>
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className={`w-full py-5 bg-black text-white text-sm font-black tracking-[0.3em] uppercase transition-all shadow-xl hover:bg-accent hover:text-black ${status === 'sending' ? 'opacity-50 cursor-wait' : ''}`}
                    >
                        {status === 'sending' ? t.common.sending : t.common.send}
                    </button>
                </form>
            )}
        </div>
    </div>
  );
};

export default WaitingListModal;