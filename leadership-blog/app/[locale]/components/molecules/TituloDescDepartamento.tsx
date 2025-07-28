import { IconoLog } from '../atoms/IconoDep';
import { DescDep } from '../atoms/DescDepartamento';
import { TituloDep } from '../atoms/TituloDepartamento';

interface DepCard {
  iconSrc: string;
  iconAlt: string;
  title: string;
  desc: string;
}

export const TTDesc = ({ iconSrc, iconAlt, title, desc }: DepCard) => {
  return (
    <div className="mx-auto my-10 max-w-7xl">
      <div className="flex min-h-[299px] items-center gap-x-6 rounded-2xl bg-[#757575] p-8 dark:bg-[#D9D9D9]">
        <div className="flex-shrink-0">
          <IconoLog
            src={'/icons/' + iconSrc}
            alt={iconAlt}
            width={64}
            height={64}
          />
        </div>

        <div>
          <TituloDep> {title} </TituloDep>
          <DescDep> {desc} </DescDep>
        </div>
      </div>
    </div>
  );
};
