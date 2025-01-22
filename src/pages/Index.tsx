import { DynamicFlipbook } from "@/components/DynamicFlipbook/DynamicFlipbook";

const Index = () => {
  // Example initial texts for the flipbook
  const initialTexts = {
    'page0-main': 'Welcome to our Story',
    'page0-secondary': 'Click to edit this text',
    'page1-main': 'This is page 1',
    'page1-secondary': 'Add your content here',
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Interactive Flipbook</h1>
        <DynamicFlipbook
          pageCount={5}
          coverImage="/placeholder.svg"
          backCoverImage="/placeholder.svg"
          middlePageImage="/placeholder.svg"
          initialTexts={initialTexts}
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default Index;