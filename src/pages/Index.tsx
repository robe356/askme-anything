import { DynamicFlipbook } from "@/components/DynamicFlipbook/DynamicFlipbook";

const Index = () => {
  // Example initial texts for the flipbook
  const initialTexts = {
    'page0-main': 'Welcome to our Story',
    'page0-secondary': 'Click to edit this text',
    'page1-main': 'This is page 1',
    'page1-secondary': 'Add your content here',
  };

  // Using data URLs for placeholder images to ensure they always work
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3EPlaceholder%3C/text%3E%3C/svg%3E";

  console.log('Rendering Index component with placeholder image');

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Interactive Flipbook</h1>
        <DynamicFlipbook
          pageCount={5}
          coverImage={placeholderImage}
          backCoverImage={placeholderImage}
          middlePageImage={placeholderImage}
          initialTexts={initialTexts}
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default Index;