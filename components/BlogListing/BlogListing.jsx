import Link from "next/link";
import Avatar from '../../components/DesignSystem/Avatar'
import FormattedDate from "../../components/DesignSystem/Date";
import Thumbnail from "../DesignSystem/Thumbnail";

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
        <Thumbnail title={title} directory={'/blog/'} slug={slug} imageUrl={coverImage.url} />
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
  if (!articles) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(articles)) {
    console.error('Invalid articles data:', articles);
    return <div>Error: Invalid data structure</div>;
  }

  if (articles.length === 0) {
    return <div>No articles found</div>;
  }

  return (
    <section>
      <div className="">
        {articles.map((article) => (
          <div key={article.sys.id} className="row mb-4 p-3 border border-1 border-gray rounded shadow">
            <div className="col">
              <Link href={`/blog/${article.slug}`}>
                <Thumbnail title={article.title} imageUrl={article.thumbnail.url} />
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
