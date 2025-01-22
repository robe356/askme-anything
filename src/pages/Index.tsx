import { DynamicFlipbook } from "@/components/DynamicFlipbook/DynamicFlipbook";

const Index = () => {
  // Example initial texts for the flipbook
  const initialTexts = {
    'page0-main': 'Welcome to our Story',
    'page0-secondary': 'Click to edit this text',
    'page1-main': 'This is page 1',
    'page1-secondary': 'Add your content here',
  };

  // Using Unsplash images as reliable placeholders
  const coverImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
  const middlePageImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";
  const backCoverImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";

  console.log('Rendering Index component with Unsplash placeholder images');

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Interactive Flipbook</h1>
        <DynamicFlipbook
          pageCount={5}
          coverImage={coverImage}
          backCoverImage={backCoverImage}
          middlePageImage={middlePageImage}
          initialTexts={initialTexts}
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default Index;