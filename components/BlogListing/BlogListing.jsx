import Link from "next/link";
import Avatar from '../../components/DesignSystem/Avatar'
import FormattedDate from "../../components/DesignSystem/Date";
import CoverImage from "../DesignSystem/CoverImage";
import ContentfulImage from "../DesignSystem/ContentfulImage";

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <FormattedDate dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

export default function BlogListing({ articles }) {
  return (
    <section>
      <div className="">
        {Object.values(articles).map((article) => (
          <div key={article.sys.id} className="row mb-5">
            <div className="col-3">
              <Link href={`/blog/${article.slug}`}>
                <img
                  width="200"
                  height="170"
                  alt={article.articleTitle}
                  src={article.thumbnail.url}
                  className="noStretch mb-2"
                />
              </Link>
            </div>
            <div className="col-lg-9 col-md-auto">
              <p className="h4 leading-snug">
                <Link
                  href={`/blog/${article.slug}`}
                  className="hover:underline"
                >
                  {article.articleTitle}
                </Link>
              </p>
              <p className="text-lg leading-relaxed mb-4">{article.excerpt}</p>
              <p className="mb-0">Written by {article.author.name}</p>
              <p>
                Published on{" "}
                <FormattedDate dateString={article.articlePostDate} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
