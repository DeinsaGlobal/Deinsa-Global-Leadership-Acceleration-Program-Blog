import { IconoLog } from "../atoms/IconoDep";
import { DescDep } from "../atoms/DescDepartamento";
import { TituloDep } from "../atoms/TituloDepartamento";
import { useTranslations } from "next-intl";

interface DepCard {
    iconSrc: string;
    iconAlt: string;
    title: string;
    desc: string;
}

export const TTDesc = ({iconSrc, iconAlt, title, desc}: DepCard) => {

   

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="bg-[#757575] rounded-2xl p-8 flex items-center gap-x-6 min-h-[299px]">
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