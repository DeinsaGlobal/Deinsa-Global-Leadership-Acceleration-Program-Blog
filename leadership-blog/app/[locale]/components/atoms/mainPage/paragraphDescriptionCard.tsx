import React from 'react';

interface ParagraphProps {
  text: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return <p className={`mt-1 text-sm text-gray-600 ${className}`}>{text}</p>;
};

export default Paragraph;
// This component is a simple paragraph that takes text and an optional className as props.
