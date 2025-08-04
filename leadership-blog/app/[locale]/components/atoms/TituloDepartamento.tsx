import React from 'react';

interface TituloDep {
  children: React.ReactNode;
}

export const TituloDep = ({ children }: TituloDep) => {
  return (
    <h2 className="font-bol text-[48px] text-white dark:text-[#000000]">
      {children}
    </h2>
  );
};
