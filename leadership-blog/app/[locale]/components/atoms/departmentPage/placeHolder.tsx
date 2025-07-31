import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  children?: React.ReactNode;
}

const PlaceHolder: React.FC<ImagePlaceholderProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`w-full rounded-t-lg bg-gray-400 ${className}`}
      style={{ height: '150px' }}
    >
      {children} {/* add image or icon */}
    </div>
  );
};

export default PlaceHolder;
// This component is a simple image placeholder that takes an optional className as a prop.
