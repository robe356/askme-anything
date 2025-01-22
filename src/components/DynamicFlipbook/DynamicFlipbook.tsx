import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import './DynamicFlipbook.css';

interface FlipbookProps {
  pageCount: number;
  coverImage: string;
  backCoverImage: string;
  middlePageImage: string;
  initialTexts?: { [key: string]: string };
  className?: string;
}

export const DynamicFlipbook: React.FC<FlipbookProps> = ({
  pageCount,
  coverImage,
  backCoverImage,
  middlePageImage,
  initialTexts = {},
  className
}) => {
  const [texts, setTexts] = useState(initialTexts);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Center between pages 0 and 1 on initial render
    setCurrentPage(0.5);
    
    console.log('DynamicFlipbook mounted with images:', {
      coverImage,
      backCoverImage,
      middlePageImage
    });
  }, [coverImage, backCoverImage, middlePageImage]);

  const updatePageText = (pageNumber: number, fieldId: string, newText: string) => {
    setTexts(prev => ({
      ...prev,
      [`page${pageNumber}-${fieldId}`]: newText
    }));
    console.log(`Updated text on page ${pageNumber}, field ${fieldId}: ${newText}`);
  };

  const getPageText = (pageNumber: number, fieldId: string) => {
    return texts[`page${pageNumber}-${fieldId}`] || '';
  };

  const getPageBackground = (pageNumber: number) => {
    if (pageNumber === 0) return coverImage;
    if (pageNumber === pageCount - 1) return backCoverImage;
    return middlePageImage;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    console.error('Failed to load image for page');
    const target = e.target as HTMLDivElement;
    target.style.backgroundColor = '#f0f0f0';
  };

  return (
    <div className={cn("flipbook-container", className)}>
      <div className="flipbook">
        {Array.from({ length: pageCount }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "page",
              currentPage === index && "current",
              currentPage > index && "turned"
            )}
            style={{ 
              backgroundImage: `url(${getPageBackground(index)})`,
              '--page-offset': index - currentPage
            } as React.CSSProperties}
            onError={handleImageError}
          >
            <div className="page-content">
              <div
                className="editable-text"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updatePageText(index, 'main', e.currentTarget.textContent || '')}
              >
                {getPageText(index, 'main')}
              </div>
              <div
                className="editable-text secondary"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updatePageText(index, 'secondary', e.currentTarget.textContent || '')}
              >
                {getPageText(index, 'secondary')}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flipbook-controls">
        <button
          onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>Page {Math.ceil(currentPage + 1)} of {pageCount}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(pageCount - 1, prev + 1))}
          disabled={currentPage === pageCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};