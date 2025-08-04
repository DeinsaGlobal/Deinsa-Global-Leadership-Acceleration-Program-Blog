type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return (
    <h3 className="mb-2 text-[25px] font-semibold text-[#000000] dark:text-[#FFFFFF]">
      {children}
    </h3>
  );
}
