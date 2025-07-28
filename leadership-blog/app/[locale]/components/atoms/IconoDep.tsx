import Image from "next/image";

interface icono {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export const IconoLog = ({src, alt, width, height}: icono) => {

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}