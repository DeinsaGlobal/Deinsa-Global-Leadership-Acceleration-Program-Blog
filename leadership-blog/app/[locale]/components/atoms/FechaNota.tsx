import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function FechaNota({ children }: Props) {
  return <p className="text-[14px] font-semibold text-[#939393]">{children}</p>;
}
