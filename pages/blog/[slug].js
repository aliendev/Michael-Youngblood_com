import Head from 'next/head'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'

import apolloClient, { USE_PREVIEW_CONTENT } from '../../lib/apollo-client'
import { ONE_ARTICLE_QUERY } from '../../lib/contentfulSchema'
import MoreArticles from '../../components/more-articles'

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const { data, errors, error } = await apolloClient.query({
      query: ONE_ARTICLE_QUERY,
      variables: { slug, preview: USE_PREVIEW_CONTENT },
      fetchPolicy: USE_PREVIEW_CONTENT ? 'no-cache' : undefined
  });

  if (errors || error) {
    return { notFound: true };
  }

  if (!("blogArticleCollection" in data) || data.blogArticleCollection.total !== 1) {
    console.log('NOTHING FOUND')
    return { notFound: true };
  }

  return {
    props: {
      blogData: { ...data.blogArticleCollection.items[0] }
    }
  };
}

const BlogArticle = ({ blogData }) => {
  console.log(blogData)
  const metaTitle = blogData.articleTitle ? blogData.articleTitle : blogData.articleTitle;
  const metaDesc = blogData.excerpt ? blogData.excerpt : blogData.excerpt;
  return (
    <Layout>
      <Container>


        <Head>
            {metaTitle && <title>{`${metaTitle} | Michael Youngblood`}</title>}
            {metaDesc && <meta name="description" content={metaDesc} />}
        </Head>
        {!blogData?.articleTitle ? (
            <PostTitle>Loading...</PostTitle>
        ) : (
            <>
              <article>
              <PostHeader
                title={blogData.articleTitle}
                coverImage={blogData.coverImage}
                date={blogData.date}
                author={blogData.author}
              />
              <PostBody content={blogData.content} />
              </article>

              {/* TODO: I need to query for latest  5 articles or so and populate this.
              {MoreArticles && MoreArticles.length > 0 && (
                <MoreStories posts={MoreArticles} />
              )}
              */}
            </>
        )}
      </Container>
    </Layout>
  );
};
export default BlogArticle;

