import Image from "next/image";

export default function Icon({image, href, altText}) {
    return (
        <div className="icon-container flex flex-0 fully-center rounded-corners-10">
            <a className="link" target="_blank" href={href}>
                <Image src={image} alt={altText} className="icon" priority />
            </a>
        </div>
    );
}