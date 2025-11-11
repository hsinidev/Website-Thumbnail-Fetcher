import React, { useState, ReactNode } from 'react';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

interface ThemeLayoutProps {
  children: ReactNode;
}

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-900 border border-cyan-500 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
        <div className="text-gray-300 space-y-4 prose prose-invert prose-p:text-gray-300 prose-headings:text-cyan-400">{content}</div>
      </div>
    </div>
);


const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    
    const navLinks: ModalType[] = ['About', 'Contact', 'Guide', 'Privacy', 'Terms', 'DMCA'];
    
    const getModalContent = (modal: ModalType) => {
        switch (modal) {
            case 'About': return <p>This Website Thumbnail Fetcher is a powerful tool built with React and Tailwind CSS to demonstrate how modern web applications can integrate with external APIs to generate live screenshots of websites. It's designed for developers, marketers, and designers who need quick visual previews.</p>;
            case 'Contact': return <p>For inquiries, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">doodax.com</a>.</p>;
            case 'Guide': return <p>Simply enter your custom Screenshot API endpoint, paste the full URL of the website you want to capture, choose your desired options (like 'Full Page Screenshot'), and click 'Generate Thumbnail'. The tool will then fetch and display the image, which you can download.</p>;
            case 'Privacy': return <p>We respect your privacy. This tool does not store any URLs you enter or the images generated. All processing is done in real-time. We do not use cookies or tracking technologies for the core functionality of this tool.</p>;
            case 'Terms': return <p>By using this service, you agree not to use it for any illegal purposes. You are responsible for ensuring you have the right to capture and use screenshots of the websites you enter. We are not liable for any misuse of this tool.</p>;
            case 'DMCA': return <p>If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, please provide our copyright agent with a notification of claimed infringement containing all of the required information as described in our full DMCA policy.</p>;
            default: return null;
        }
    };

    return (
        <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
            <div className="stars"></div>
            <div className="twinkling"></div>

            <div className="relative z-10">
                <header className="py-6 px-4 md:px-8">
                    <div className="container mx-auto flex justify-between items-center">
                         <h1 className="text-2xl md:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                           Website Thumbnail Fetcher
                        </h1>
                        <nav className="hidden md:flex space-x-4">
                           {navLinks.map(link => (
                             <button key={link} onClick={() => setActiveModal(link)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                               {link === 'Privacy' ? 'Privacy Policy' : link === 'Terms' ? 'Terms of Service' : link}
                             </button>
                           ))}
                        </nav>
                         <div className="md:hidden">
                            <select onChange={(e) => setActiveModal(e.target.value as ModalType)} className="bg-gray-800 border border-gray-700 rounded-md p-2 text-white">
                                <option>Menu</option>
                                {navLinks.map(link => (
                                <option key={link} value={link}>{link === 'Privacy' ? 'Privacy Policy' : link === 'Terms' ? 'Terms of Service' : link}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </header>
                
                <main>{children}</main>

                <footer className="py-8 px-4 text-center text-gray-400">
                    <div className="container mx-auto">
                        <p className="mb-2">
                          <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>
                            Powered by HSINI MOHAMED
                          </a>
                        </p>
                        <p className="text-sm">
                            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
                            &nbsp;&bull;&nbsp;
                            <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                        </p>
                    </div>
                </footer>
            </div>
            {activeModal && <Modal title={activeModal === 'Privacy' ? 'Privacy Policy' : activeModal === 'Terms' ? 'Terms of Service' : activeModal || ''} content={getModalContent(activeModal)} onClose={() => setActiveModal(null)} />}
        </div>
    );
};

export default ThemeLayout;
