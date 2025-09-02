import React from 'react';

interface MachineLearningIndustryVizProps {
  businessFocus?: 'care' | 'industry';
}

const MachineLearningIndustryViz: React.FC<MachineLearningIndustryVizProps> = ({ businessFocus }) => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-blue-100 text-blue-800">
      <p>{businessFocus === 'care' ? 'Care-focused Machine Learning Visualization' : 'Industry-focused Machine Learning Visualization'}</p>
    </div>
  );
};

export default MachineLearningIndustryViz;
