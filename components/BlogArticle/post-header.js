import DateComponent from "../date";
import CoverImage from "../cover-image";
import PostTitle from "./post-title";
import SectionSeparator from "../section-separator";

export default function PostHeader({ title, coverImage, date, author }) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                {/* author && <Avatar name={author.name} picture={author.picture} /> */}
                <p>written by {author.name} on <DateComponent dateString={date} /></p>
            </div>
            <SectionSeparator />
            <div className="mb-3">
                <CoverImage title={title} url={coverImage.url} />
            </div>
        </>
    );
}
