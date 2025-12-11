import React, { useState } from 'react';

const ThumbnailFetcherTool: React.FC = () => {
    const [apiKey, setApiKey] = useState('');
    const [url, setUrl] = useState('');
    const [isFullPage, setIsFullPage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!url) {
            setError('Please enter a valid website URL to begin.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setImageUrl(null);

        // Simulate API call delay for UX
        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            // In a real app, you'd use the apiKey and url to call your screenshot API.
            // Here, we simulate it using a placeholder image service.
            const screenshotUrl = `https://picsum.photos/1280/${isFullPage ? 1800 : 720}`;
            const response = await fetch(screenshotUrl);
            
            if (!response.ok) {
                throw new Error('Failed to fetch the thumbnail. Please check the URL and try again.');
            }

            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            setImageUrl(objectUrl);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="tool" className="mb-20 flex justify-center w-full px-4 relative z-20">
            <div className="w-full max-w-4xl bg-[#0f111a]/60 backdrop-blur-xl border border-gray-700/30 rounded-[2.5rem] p-6 md:p-14 shadow-[0_0_80px_rgba(6,182,212,0.15)] transform transition-all hover:shadow-[0_0_100px_rgba(6,182,212,0.25)] hover:bg-[#0f111a]/70">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
                        Doodax v2.0 Live
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                        Visualize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Any Website</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Enter a URL below to instantly generate a high-fidelity screenshot using our advanced rendering engine.
                    </p>
                </div>
                
                <div className="space-y-8">
                    <div className="relative group">
                         <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <span className="text-gray-500 font-bold border-r border-gray-700 pr-4">https://</span>
                        </div>
                        <input
                            type="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="doodax.com"
                            className="block w-full pl-32 pr-6 py-6 bg-[#0b0d14] border border-gray-800 rounded-2xl text-white placeholder-gray-600 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-xl shadow-inner font-medium"
                            required
                        />
                    </div>

                    {/* API Key Input - Optional and Secure */}
                    <div className="relative group opacity-80 hover:opacity-100 transition-opacity">
                        <input
                            type="password"
                            id="apiKey"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Enter API Key (Optional)"
                            className="block w-full px-6 py-4 bg-[#0b0d14]/50 border border-gray-800 rounded-2xl text-gray-300 placeholder-gray-700 focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all text-sm text-center"
                        />
                        <p className="text-center text-xs text-gray-600 mt-2">Your key is processed securely and never stored.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-4">
                        <label htmlFor="fullPage" className="flex items-center space-x-4 cursor-pointer group p-4 rounded-2xl hover:bg-white/5 transition-all w-full md:w-auto border border-transparent hover:border-gray-700 select-none">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id="fullPage"
                                    checked={isFullPage}
                                    onChange={(e) => setIsFullPage(e.target.checked)}
                                    className="sr-only"
                                />
                                <div className={`w-14 h-8 bg-gray-800 rounded-full shadow-inner transition-colors duration-300 ${isFullPage ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : ''}`}></div>
                                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${isFullPage ? 'translate-x-6' : ''}`}></div>
                            </div>
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-lg">Full Page Capture</span>
                        </label>
                        
                        <button 
                            onClick={handleGenerate} 
                            disabled={isLoading}
                            className="w-full md:w-auto flex-grow md:flex-grow-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-5 px-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(6,182,212,0.5)] transform hover:-translate-y-1 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg tracking-wide border border-white/10"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                'Generate Snapshot'
                            )}
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mt-8 text-center bg-red-500/10 border border-red-500/30 text-red-200 p-4 rounded-xl animate-bounce-in backdrop-blur-sm">
                        <span className="font-bold mr-2">Error:</span> {error}
                    </div>
                )}

                {imageUrl && (
                    <div className="mt-12 text-center animate-fadeIn duration-700">
                         <div className="inline-block relative group w-full">
                             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                             <div className="relative border border-gray-700 bg-[#0b0d14] rounded-2xl p-2 shadow-2xl overflow-hidden">
                                 <img src={imageUrl} alt="Generated Website Thumbnail" className="w-full h-auto rounded-xl shadow-inner" />
                             </div>
                         </div>
                         <div className="mt-10">
                            <a 
                                href={imageUrl} 
                                download="doodax_capture.png"
                                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-12 rounded-xl shadow-[0_10px_30px_-5px_rgba(16,185,129,0.4)] transform hover:scale-105 transition-all duration-300 border border-emerald-400/20"
                            >
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                Download Capture
                            </a>
                         </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ThumbnailFetcherTool;