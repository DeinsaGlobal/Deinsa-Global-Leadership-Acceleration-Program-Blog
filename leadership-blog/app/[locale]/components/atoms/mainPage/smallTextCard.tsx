import React from 'react';

interface TextSmallProps {
  text: string;
  className?: string;
}

const TextSmall: React.FC<TextSmallProps> = ({ text, className }) => {
  return <span className={`text-xs text-gray-500 ${className}`}>{text}</span>;
};

export default TextSmall;
// This component is a simple text element that takes text and an optional className as props.
