import ContentfulImage from "./ContentfulImage";
import Link from "next/link";

export default function Thumbnail({ title, imageUrl }) {
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
            {image}
        </div>
    );
}
