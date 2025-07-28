import React from 'react';

interface TituloDep {
    children: React.ReactNode;
    
}

export const TituloDep = ({children}: TituloDep) => {

    return (
         <h2 className="text-white text-[48px] font-bol">
            {children}
        </h2>
    )
}