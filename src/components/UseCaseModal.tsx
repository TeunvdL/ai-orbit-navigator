import React from 'react';
import { X } from 'lucide-react';
import { UseCase } from '../utils/useCases';
import { Button } from './ui/button';

interface UseCaseModalProps {
  useCase: UseCase;
  imageSrc: string;
  onClose: () => void;
}

export const UseCaseModal: React.FC<UseCaseModalProps> = ({ useCase, imageSrc, onClose }) => {
  // Remove the first H1 title from content to avoid duplication
  const contentWithoutTitle = useCase.content.replace(/^#\s+.*$/m, '').trim();
  
  // Parse markdown to HTML with proper formatting
  const parseMarkdown = (markdown: string) => {
    return markdown
      // Headers
      .replace(/^## (.*$)/gim, '<h3 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">$1</h3>')
      .replace(/^### (.*$)/gim, '<h4 class="text-lg font-semibold text-cyan-300 mt-6 mb-3">$1</h4>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-300 font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists - handle multi-line list items
      .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 leading-relaxed">$1</li>')
      // Wrap consecutive list items in ul
      .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc space-y-1 mb-6">$&</ul>')
      // Paragraphs - convert double newlines to paragraphs
      .split('\n\n')
      .map(para => {
        if (para.trim() && !para.includes('<h3') && !para.includes('<h4') && !para.includes('<ul')) {
          return `<p class="mb-4 leading-relaxed">${para.trim()}</p>`;
        }
        return para;
      })
      .join('\n');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl">
        {/* Close Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background border-border shadow-lg"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <img 
            src={imageSrc} 
            alt={useCase.metadata.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">{useCase.metadata.title}</h2>
          
          <div className="prose prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: parseMarkdown(contentWithoutTitle)
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
