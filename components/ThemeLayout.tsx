import React, { useState, ReactNode } from 'react';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

interface ThemeLayoutProps {
  children: ReactNode;
}

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 transition-all duration-300" onClick={onClose}>
      <div className="bg-[#0f111a] border border-cyan-500/20 rounded-2xl shadow-[0_0_100px_rgba(6,182,212,0.2)] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-red-500/80 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 text-xl font-bold z-10">&times;</button>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 border-b border-white/10 pb-4">{title}</h2>
        <div className="text-gray-300 space-y-6 prose prose-invert prose-lg max-w-none leading-relaxed">
            {content}
        </div>
      </div>
    </div>
);


const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    
    const navLinks: ModalType[] = ['About', 'Contact', 'Guide', 'Privacy', 'Terms', 'DMCA'];
    
    const getModalContent = (modal: ModalType) => {
        switch (modal) {
            case 'About': return (
                <>
                    <p>Welcome to <strong>doodax.com</strong>. We are a premier digital utility platform dedicated to simplifying the visual web for developers, marketers, and content creators.</p>
                    <p>Our mission is to provide robust, reliable, and high-quality website thumbnail generation services. In an era where visual content dominates user attention, having accurate and instant previews of web links is essential.</p>
                    <p>Developed by <strong>HSINI MOHAMED</strong>, this project represents the intersection of modern web performance, SEO optimization, and user-centric design.</p>
                </>
            );
            case 'Contact': return (
                <>
                    <p>We are here to help. If you have any questions, suggestions, or require support, please do not hesitate to reach out.</p>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 mt-6">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <span className="text-gray-400 font-bold w-32 uppercase text-xs tracking-wider">Website</span>
                                <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">doodax.com</a>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center">
                                <span className="text-gray-400 font-bold w-32 uppercase text-xs tracking-wider">Email</span>
                                <a href="mailto:hsini.web@gmail.com" className="text-white hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center">
                                <span className="text-gray-400 font-bold w-32 uppercase text-xs tracking-wider">Developer</span>
                                <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">HSINI MOHAMED</a>
                            </div>
                        </div>
                    </div>
                </>
            );
            case 'Guide': return (
                <>
                    <h3 className="text-xl font-bold text-white mb-4">User Guide</h3>
                    <div className="grid gap-6">
                        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-cyan-400 mb-2">1. Input URL</h4>
                            <p className="text-sm">Paste the website address you wish to capture into the main input field. Ensure it includes http:// or https://.</p>
                        </div>
                        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-cyan-400 mb-2">2. Customize</h4>
                            <p className="text-sm">Select "Full Page Capture" if you need the entire length of the website, or leave it unchecked for a standard viewport snapshot.</p>
                        </div>
                        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-cyan-400 mb-2">3. Download</h4>
                            <p className="text-sm">Click "Generate". Once the preview appears, use the download button to save the high-resolution image to your device.</p>
                        </div>
                    </div>
                </>
            );
            case 'Privacy': return (
                <>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Last Updated: October 2023</p>
                    <p><strong>doodax.com</strong> ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by doodax.com.</p>
                    
                    <h4 className="text-lg font-bold text-white mt-6">Information We Collect</h4>
                    <p>We do not collect personal identification information from Users unless they voluntarily submit such information to us (e.g., via email at <strong>hsini.web@gmail.com</strong>). Users can always refuse to supply personally identification information.</p>
                    <p>We may collect non-personal identification information about Users whenever they interact with our Site, such as the browser name, the type of computer, and technical information about means of connection.</p>

                    <h4 className="text-lg font-bold text-white mt-6">How We Use Your Information</h4>
                    <p>We may use the information we collect to improve our website, respond to customer service requests, and send periodic emails if you have opted in or contacted us directly.</p>

                    <h4 className="text-lg font-bold text-white mt-6">Web Browser Cookies</h4>
                    <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them.</p>
                    
                    <p className="mt-8 pt-4 border-t border-gray-700">Contact: <strong>hsini.web@gmail.com</strong></p>
                </>
            );
            case 'Terms': return (
                <>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Last Updated: October 2023</p>
                    <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the <strong>doodax.com</strong> website operated by HSINI MOHAMED.</p>
                    
                    <h4 className="text-lg font-bold text-white mt-6">Conditions of Use</h4>
                    <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly.</p>

                    <h4 className="text-lg font-bold text-white mt-6">Intellectual Property</h4>
                    <p>You agree that all materials, products, and services provided on this website are the property of doodax.com, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.</p>

                    <h4 className="text-lg font-bold text-white mt-6">User Obligations</h4>
                    <p>As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information.</p>
                </>
            );
            case 'DMCA': return (
                <>
                    <h3 className="text-xl font-bold text-white">DMCA Policy</h3>
                    <p><strong>doodax.com</strong> respects the intellectual property rights of others. Per the DMCA, we will respond expeditiously to claims of copyright infringement on the Site if submitted to our Copyright Agent as described below.</p>
                    
                    <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-lg my-6">
                        <p className="text-sm text-red-200 font-semibold">Contact Email for Legal Notices: <br/><span className="text-white text-lg">hsini.web@gmail.com</span></p>
                    </div>

                    <h4 className="text-lg font-bold text-white mt-4">Filing a DMCA Notice</h4>
                    <p>If you believe that your intellectual property rights have been violated, please provide us with the following information:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                        <li>A description of the copyrighted work or other intellectual property that you claim has been infringed.</li>
                        <li>A description of where the material that you claim is infringing is located on the Site.</li>
                        <li>An address, telephone number, and email address where we can contact you.</li>
                        <li>A statement that you have a good-faith belief that the use is not authorized by the copyright owner or other intellectual property rights owner, by its agent, or by law.</li>
                        <li>A statement by you under penalty of perjury that the information in your notice is accurate and that you are the copyright or intellectual property owner or are authorized to act on the owner's behalf.</li>
                    </ul>
                </>
            );
            default: return null;
        }
    };

    return (
        <div className="relative min-h-screen text-white font-sans overflow-x-hidden flex flex-col">
            {/* Galaxy Background Implementation */}
            <div className="galaxy-wrapper">
                <div className="nebula-layer"></div>
                <div className="stars star-layer-1"></div>
                <div className="stars star-layer-2"></div>
            </div>

            <div className="relative z-10 flex flex-col flex-grow">
                <header className="py-6 px-4 md:px-8 bg-black/20 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 transition-all duration-300">
                    <div className="container mx-auto flex justify-between items-center">
                         <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            </div>
                            <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200">
                            doodax<span className="text-cyan-400">.com</span>
                            </h1>
                         </div>
                        
                        <nav className="hidden lg:flex space-x-2">
                           {navLinks.map(link => (
                             <button 
                                key={link} 
                                onClick={() => setActiveModal(link)} 
                                className="px-4 py-2 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 uppercase tracking-widest border border-transparent hover:border-white/20"
                            >
                               {link === 'Privacy' ? 'Privacy' : link === 'Terms' ? 'Terms' : link}
                             </button>
                           ))}
                        </nav>
                         <div className="lg:hidden">
                            <select onChange={(e) => setActiveModal(e.target.value as ModalType)} className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-white text-sm outline-none focus:ring-2 focus:ring-cyan-500">
                                <option value="">Menu</option>
                                {navLinks.map(link => (
                                <option key={link} value={link}>{link}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </header>
                
                <main className="flex-grow flex flex-col justify-start w-full max-w-[1920px] mx-auto pt-8">
                    {children}
                </main>

                <footer className="py-12 px-4 text-center text-gray-400 bg-black/40 backdrop-blur-xl border-t border-white/5 mt-auto">
                    <div className="container mx-auto space-y-8">
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                             {navLinks.map(link => (
                                <button key={link} onClick={() => setActiveModal(link)} className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-cyan-400 transition-colors">
                                    {link === 'Privacy' ? 'Privacy Policy' : link === 'Terms' ? 'Terms of Service' : link}
                                </button>
                             ))}
                        </div>
                        
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-900 to-transparent mx-auto"></div>

                        <div className="flex flex-col items-center space-y-4">
                             <div className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-cyan-500/30 transition-all">
                                <span className="text-gray-400 font-medium">Powered by</span>
                                <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:text-white transition-all flex items-center">
                                    HSINI MOHAMED
                                    <svg className="w-4 h-4 ml-1 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </div>
                            <p className="text-xs text-gray-600">
                                &copy; {new Date().getFullYear()} doodax.com. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            {activeModal && <Modal title={activeModal === 'Privacy' ? 'Privacy Policy' : activeModal === 'Terms' ? 'Terms of Service' : activeModal || ''} content={getModalContent(activeModal)} onClose={() => setActiveModal(null)} />}
        </div>
    );
};

export default ThemeLayout;