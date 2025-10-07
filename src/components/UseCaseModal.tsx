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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-cyan-500/30 rounded-xl shadow-2xl">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-cyan-400 hover:text-cyan-300 hover:bg-gray-800/50"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={useCase.metadata.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-6">{useCase.metadata.title}</h2>
          
          <div className="prose prose-invert max-w-none text-gray-100">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: useCase.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-300">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^## (.*$)/gim, '<h3 class="text-xl font-semibold text-cyan-400 mt-6 mb-3">$1</h3>')
                  .replace(/^# (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                  .replace(/^- (.*$)/gim, '<li class="ml-6 mb-1">$1</li>')
                  .replace(/\n\n/g, '<br/><br/>')
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
