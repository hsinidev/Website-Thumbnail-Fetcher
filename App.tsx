import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import ThumbnailFetcherTool from './components/ThumbnailFetcherTool';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24">
        <ThumbnailFetcherTool />
        <SeoArticle />
      </div>
    </ThemeLayout>
  );
};

export default App;