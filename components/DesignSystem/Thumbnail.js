import ContentfulImage from "./ContentfulImage";
import Link from "next/link";

export default function Thumbnail({ title, directory, imageUrl, slug }) {
    const image = (
      <>
        <ContentfulImage
            width={200}
            height={200}
            alt={`${title}`}
            className="object-fit-cover mw-100 w-100"
            src={imageUrl}
        />
        </>
    );

    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`${directory}${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
