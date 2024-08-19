import Image from "next/image";
import Link from "next/link";

export default function ProjectScreenshot({ image, imageAltText, url }) {
    //Setup the wrapper type based on if there's a url or not
    const Wrapper = url ? Link : 'div';

    return (
        <Wrapper className="screenshot-container border light-blue-border rounded-corners-10 flex" href={url}>
            {image && (
                <Image className="project-screenshot flex-1" src={image} alt={imageAltText} width={384} height={216} />
            )}
        </Wrapper>
    );
}