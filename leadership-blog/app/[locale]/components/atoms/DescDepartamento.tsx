import React from "react";

interface DescDep {
    children: React.ReactNode
}

export const DescDep = ({children}: DescDep) => {
    return (
        <p className=" text-base font-semibold text-white/80 dark:text-[#000000] mt-2 tracking-wide max-w-[680px] text-[15px]">
            {children}
        </p>
    )
}
 