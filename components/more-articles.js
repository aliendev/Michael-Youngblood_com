import PostPreview from './post-preview'

export default function MoreArticles({ articles }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {Object.values(articles).map((article) => (
          <PostPreview
            key={article.sys.id}
            title={article.articleTitle}
            coverImage={article.thumbnail}
            date={article.articlePostDate}
            author={article.author}
            slug={article.slug}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
