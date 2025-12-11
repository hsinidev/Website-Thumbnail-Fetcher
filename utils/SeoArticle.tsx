import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="seo-guide" className="w-full max-w-6xl mx-auto mb-20 relative z-20">
             <div className="bg-[#0b0d14]/80 backdrop-blur-md border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Header that is always visible */}
                <div className="p-8 border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-transparent">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                        Comprehensive Guide to <span className="text-cyan-400">Website Thumbnails</span> & SEO
                    </h2>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">doodax.com Official Documentation</p>
                </div>

                {/* Content Area with strict height limit when collapsed */}
                <div 
                    className="relative transition-all duration-1000 ease-in-out"
                    style={{ 
                        // "Just 2 lines" roughly equals 3.5rem - 4rem depending on line-height. 
                        // We use max-height with overflow-hidden.
                        maxHeight: isExpanded ? '40000px' : '70px',
                        overflow: 'hidden' 
                    }}
                >
                    <div className="p-8 md:p-12 text-gray-300 leading-relaxed space-y-8 text-lg font-light">
                        {/* Intro Paragraph - The only part partially visible initially */}
                        <p className="font-medium text-xl text-gray-200">
                            Welcome to the definitive guide on website thumbnail generation, visual link previews, and the role of rich media in modern Search Engine Optimization (SEO). At <strong>doodax.com</strong>, we are revolutionizing how developers and marketers interact with the visual web.
                        </p>

                        <hr className="border-gray-800" />

                        {/* START OF MASSIVE SEO CONTENT */}
                        
                        {/* Table of Contents */}
                        <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Table of Contents</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium text-cyan-500">
                                <li><a href="#visual-web" className="hover:text-white transition-colors">1. The Rise of the Visual Web</a></li>
                                <li><a href="#how-it-works" className="hover:text-white transition-colors">2. How Screenshot APIs Work</a></li>
                                <li><a href="#doodax-tech" className="hover:text-white transition-colors">3. Inside Doodax Technology</a></li>
                                <li><a href="#seo-impact" className="hover:text-white transition-colors">4. SEO & Rich Snippets</a></li>
                                <li><a href="#developer-guide" className="hover:text-white transition-colors">5. Developer Integration Guide</a></li>
                                <li><a href="#performance" className="hover:text-white transition-colors">6. Performance & Core Web Vitals</a></li>
                                <li><a href="#security" className="hover:text-white transition-colors">7. Security & Compliance</a></li>
                                <li><a href="#future" className="hover:text-white transition-colors">8. Future of Web Capture</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">9. Frequently Asked Questions</a></li>
                            </ul>
                        </div>

                        <article id="visual-web" className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">1. The Rise of the Visual Web</h3>
                            <p>
                                The internet has evolved from a text-based repository of information into a dynamic, visually driven ecosystem. In the early days of the web, hyperlinks were simple blue text strings. Today, users expect rich visual context before they click. Whether browsing social media feeds like Twitter and Facebook, scanning search results on Google, or organizing bookmarks in a productivity tool, <strong>website thumbnails</strong> serve as the digital "front door" to content.
                            </p>
                            <p>
                                Studies in User Experience (UX) consistently show that visual cues improve navigation speed and content retention. A text link is ambiguous; a screenshot is definitive. This shift has created a massive demand for reliable, automated tools that can generate website screenshots programmatically. This is where <strong>doodax.com</strong> steps in, providing a bridge between raw URLs and visual representation.
                            </p>
                            <p>
                                For businesses, the implications are profound. A directory listing with a broken image or a generic placeholder is often ignored. Conversely, a listing with a crisp, up-to-date screenshot of the target landing page sees significantly higher Click-Through Rates (CTR). In the competitive landscape of digital marketing, these micro-optimizations compound to drive substantial traffic growth.
                            </p>
                        </article>

                        <article id="how-it-works" className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">2. How Screenshot APIs Work</h3>
                            <p>
                                To the uninitiated, taking a screenshot seems trivial—we do it on our phones and laptops daily. However, automating this process for the web, at scale, is a formidable engineering challenge. A "Website Screenshot API" or "Thumbnail Fetcher" is a cloud-based service that acts as a remote browser.
                            </p>
                            <p>
                                When you submit a URL to Doodax, the following sequence occurs within milliseconds:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                <li><strong>Request Validation:</strong> The URL is parsed, validated, and checked against safety blacklists to prevent phishing or abuse.</li>
                                <li><strong>Instance Provisioning:</strong> A headless browser instance (typically Chromium-based) is spun up in an isolated, sandboxed container.</li>
                                <li><strong>Navigation:</strong> The headless browser navigates to the target URL, executing JavaScript, loading CSS, and resolving web fonts just like a real user's device.</li>
                                <li><strong>Viewport Sizing:</strong> The browser window is resized to specific dimensions (e.g., 1920x1080 for desktop, 375x812 for mobile) to trigger the correct responsive layout.</li>
                                <li><strong>Asset Loading & Idle Detection:</strong> The system waits intelligently for the "network idle" state, ensuring that images, ads, and dynamic content have finished loading before the shutter snaps.</li>
                                <li><strong>Rasterization:</strong> The rendered DOM is rasterized into a bitmap image (PNG or JPEG).</li>
                                <li><strong>Optimization:</strong> The raw image is compressed for web delivery without sacrificing visual fidelity.</li>
                            </ul>
                        </article>

                        <article id="doodax-tech" className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">3. Inside Doodax Technology</h3>
                            <p>
                                Doodax.com is built on a modern stack designed for speed and reliability. Unlike legacy screenshot tools that rely on outdated rendering engines like PhantomJS, Doodax utilizes the latest stable build of Headless Chrome via Puppeteer and Playwright. This ensures that even the most complex Single Page Applications (SPAs) built with React, Vue, or Angular are rendered correctly.
                            </p>
                            <p>
                                <strong>Key Features of the Doodax Engine:</strong>
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                <div className="bg-gray-800/30 p-4 rounded-lg">
                                    <h4 className="font-bold text-cyan-400">Full Page Capture</h4>
                                    <p className="text-sm">Our scrolling algorithm captures the entire height of a webpage, stitching together multiple viewports into a seamless long-form image.</p>
                                </div>
                                <div className="bg-gray-800/30 p-4 rounded-lg">
                                    <h4 className="font-bold text-cyan-400">Retina Resolution</h4>
                                    <p className="text-sm">Support for high-DPI (device pixel ratio) capture ensures thumbnails look crisp on modern 4K and Retina displays.</p>
                                </div>
                                <div className="bg-gray-800/30 p-4 rounded-lg">
                                    <h4 className="font-bold text-cyan-400">Ad Blocking</h4>
                                    <p className="text-sm">Intelligent filters remove intrusive pop-ups and cookie consent banners that often obscure the main content of a screenshot.</p>
                                </div>
                                <div className="bg-gray-800/30 p-4 rounded-lg">
                                    <h4 className="font-bold text-cyan-400">Global CDN</h4>
                                    <p className="text-sm">Generated images are cached at the edge, ensuring lightning-fast delivery to users anywhere in the world.</p>
                                </div>
                            </div>
                        </article>

                        <article id="seo-impact" className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">4. SEO & Rich Snippets</h3>
                            <p>
                                Search Engine Optimization is no longer just about keywords; it is about Entity Recognition and User Engagement. Google's algorithms reward sites that keep users engaged. By utilizing Doodax to generate fresh, relevant thumbnails for your external links or portfolio items, you reduce "Pogo-sticking" (users clicking a link and immediately returning to search results).
                            </p>
                            <p>
                                Furthermore, utilizing <strong>Schema.org</strong> markup (JSON-LD) in conjunction with these images is critical. When you mark up your content as a `WebApplication`, `Article`, or `VisualArtwork`, and include the `image` property pointing to a Doodax-generated screenshot, you increase the likelihood of appearing in Google Discover and Image Search.
                            </p>
                            <p>
                                <strong>Social SEO (Open Graph & Twitter Cards):</strong> When users share your link on social media, platforms look for `og:image` tags. If you don't define one, they might scrape a random low-quality image from your page. Using Doodax to dynamically generate an Open Graph image ensures your brand always looks professional on social timelines.
                            </p>
                        </article>

                         <article id="faq" className="space-y-6 pt-8 border-t border-gray-800">
                            <h3 className="text-3xl font-bold text-white mb-6">9. Frequently Asked Questions (FAQ)</h3>
                            <div className="space-y-4">
                                <details className="bg-gray-900/50 p-4 rounded-xl cursor-pointer group">
                                    <summary className="font-bold text-white group-hover:text-cyan-400 transition-colors">Why use Doodax over a browser extension?</summary>
                                    <p className="mt-2 text-gray-400">Browser extensions are great for one-off captures, but Doodax is designed for automation, batch processing, and integration into web applications via API principles.</p>
                                </details>
                                <details className="bg-gray-900/50 p-4 rounded-xl cursor-pointer group">
                                    <summary className="font-bold text-white group-hover:text-cyan-400 transition-colors">Is the service secure?</summary>
                                    <p className="mt-2 text-gray-400">Yes. We do not store any data from the websites we capture other than the visual screenshot. All processing happens in ephemeral sandboxes.</p>
                                </details>
                                <details className="bg-gray-900/50 p-4 rounded-xl cursor-pointer group">
                                    <summary className="font-bold text-white group-hover:text-cyan-400 transition-colors">Who is HSINI MOHAMED?</summary>
                                    <p className="mt-2 text-gray-400">HSINI MOHAMED is the lead developer and architect behind Doodax.com, specializing in high-performance web engineering and SEO infrastructure.</p>
                                </details>
                                <details className="bg-gray-900/50 p-4 rounded-xl cursor-pointer group">
                                    <summary className="font-bold text-white group-hover:text-cyan-400 transition-colors">How do I contact support?</summary>
                                    <p className="mt-2 text-gray-400">You can reach our team at <a href="mailto:hsini.web@gmail.com" className="text-cyan-400">hsini.web@gmail.com</a> for any inquiries regarding the tool, API access, or legal concerns.</p>
                                </details>
                            </div>
                        </article>

                        <div className="text-center pt-12 text-sm text-gray-500">
                            <p>Document Version 2.4 | Last Updated: October 2023 | &copy; doodax.com</p>
                        </div>
                    </div>
                </div>

                {/* Gradient overlay for the collapsed state */}
                {!isExpanded && (
                    <div className="absolute top-[60px] left-0 right-0 bottom-0 bg-gradient-to-b from-[#0b0d14]/0 via-[#0b0d14]/90 to-[#0b0d14] pointer-events-none z-10"></div>
                )}
            </div>

            {/* Floating Action Button for Read More */}
            <div className="flex justify-center -mt-6 relative z-30">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    {isExpanded ? (
                        <>
                            <span className="mr-2">Collapse Article</span>
                            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                        </>
                    ) : (
                        <>
                            <span className="mr-2">Read Full Guide</span>
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </>
                    )}
                </button>
            </div>
        </section>
    );
};

export default SeoArticle;