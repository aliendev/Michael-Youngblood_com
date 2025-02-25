import Container from "../../components/container";
import MoreArticles from "../../components/more-articles";
import BlogListing from "../../components/BlogListing/BlogListing"
import Layout from "../../components/layout";
import Head from "next/head";

import apolloClient, { USE_PREVIEW_CONTENT } from "../../lib/apollo-client";
import { ALL_ARTICLES_QUERY } from "../../lib/contentfulSchema";
import SectionSeparator from "../../components/section-separator";

export async function getServerSideProps({ params }) {
    const { data, errors, error } = await apolloClient.query({
        query: ALL_ARTICLES_QUERY,
        variables: { preview: USE_PREVIEW_CONTENT },
        fetchPolicy: USE_PREVIEW_CONTENT ? "no-cache" : undefined,
    });

    if (errors || error) {
        return { notFound: true };
    }

    if (!("blogArticleCollection" in data)) {
        return { notFound: true };
    }

    return {
        props: {
            blogData: { ...data.blogArticleCollection.items },
        },
    };
}

const BlogIndex = ({ blogData }) => {
    const heroPost = blogData[0];

    return (
        <Layout>
            <Head>
                <title>{`Michael Youngblood's Blog`}</title>
            </Head>
            <Container>
                <h1 className="font-bold">
                    Michael Youngblood's Blog
                </h1>
                <SectionSeparator />

                <BlogListing articles={blogData} />

                {blogData.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </Layout>
    );
};
export default BlogIndex;
