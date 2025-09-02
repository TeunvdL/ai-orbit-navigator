import React from 'react';

interface MachineLearningCareVizProps {
  businessFocus?: 'care' | 'industry';
}

const MachineLearningCareViz: React.FC<MachineLearningCareVizProps> = ({ businessFocus }) => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-green-100 text-green-800">
      <p>{businessFocus === 'care' ? 'Care-focused Machine Learning Visualization' : 'Industry-focused Machine Learning Visualization'}</p>
    </div>
  );
};

export default MachineLearningCareViz;
