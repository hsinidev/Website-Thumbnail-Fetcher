import React, { useState } from 'react';

const ThumbnailFetcherTool: React.FC = () => {
    const [apiKey, setApiKey] = useState('');
    const [url, setUrl] = useState('https://example.com');
    const [isFullPage, setIsFullPage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!url) {
            setError('Please enter a valid URL.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setImageUrl(null);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            // In a real app, you'd use the apiKey and url to call your screenshot API.
            // Here, we simulate it using a placeholder image service.
            const screenshotUrl = `https://picsum.photos/1280/${isFullPage ? 1800 : 720}`;
            const response = await fetch(screenshotUrl);
            
            if (!response.ok) {
                throw new Error('Failed to fetch the thumbnail. Please try again.');
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
        <section id="tool" className="mb-16 md:mb-24">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl shadow-cyan-500/10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
                        Generate a Website Thumbnail
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Enter any URL to get a high-quality, live screenshot. This tool simulates a real screenshot API endpoint.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-2">Custom Screenshot API Key/Endpoint</label>
                        <input
                            type="text"
                            id="apiKey"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="paste-your-api-key-or-endpoint-here (optional)"
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">Website URL</label>
                        <input
                            type="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com"
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label htmlFor="fullPage" className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                id="fullPage"
                                checked={isFullPage}
                                onChange={(e) => setIsFullPage(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-cyan-500 focus:ring-cyan-500"
                            />
                            <span className="text-gray-300">Full Page Screenshot</span>
                        </label>
                        <button 
                            onClick={handleGenerate} 
                            disabled={isLoading}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </span>
                            ) : (
                                'Generate Thumbnail'
                            )}
                        </button>
                    </div>
                </div>

                {error && <div className="mt-6 text-center bg-red-900/50 border border-red-500 text-red-300 p-3 rounded-lg">{error}</div>}

                {imageUrl && (
                    <div className="mt-10 text-center">
                         <h3 className="text-2xl font-bold mb-4 text-cyan-400">Result</h3>
                         <div className="border-4 border-gray-700 rounded-lg p-2 inline-block shadow-2xl">
                             <img src={imageUrl} alt="Website thumbnail" className="max-w-full h-auto rounded-md" />
                         </div>
                         <div className="mt-6">
                            <a 
                                href={imageUrl} 
                                download="website_thumbnail.png"
                                className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
                            >
                                Download Image
                            </a>
                         </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ThumbnailFetcherTool;
