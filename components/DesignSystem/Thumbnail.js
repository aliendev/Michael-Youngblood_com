import ContentfulImage from "./ContentfulImage";
import Link from "next/link";

export default function Thumbnail({ title, url, slug }) {
    const image = (
        <ContentfulImage
            width={2000}
            height={500}
            alt={`${title}`}
            className="hover:shadow-medium transition-shadow duration-200 noStretch"
            src={url}
        />
    );

    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`/blog/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
