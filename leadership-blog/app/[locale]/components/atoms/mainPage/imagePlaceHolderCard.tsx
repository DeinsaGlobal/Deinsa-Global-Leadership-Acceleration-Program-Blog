import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className }) => {
  return (
    <div
      className={`w-full rounded-t-lg bg-gray-400 ${className}`}
      style={{ height: '150px' }}
    >
      {/* add image or icon */}
    </div>
  );
};

export default ImagePlaceholder;
// This component is a simple image placeholder that takes an optional className as a prop.
