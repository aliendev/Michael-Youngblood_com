import FormattedDate from "../DesignSystem/Date";
import CoverImage from "../DesignSystem/CoverImage";
import PostTitle from "./post-title";
import SectionSeparator from "../DesignSystem/SectionSeparator";

/*TODO: Make this file consistent with the rest of the codebase. */

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {/* author && <Avatar name={author.name} picture={author.picture} /> */}
        <p>
          written by {author.name} on <FormattedDate dateString={date} />
        </p>
      </div>
      <SectionSeparator />
      <div className="mb-3">
        <CoverImage alt={title} url={coverImage.url} />
      </div>
    </>
  );
}
