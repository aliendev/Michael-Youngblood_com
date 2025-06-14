import Head from "next/head";

import Layout from "@/components/layout";
import Container from "@/components/DesignSystem/Container";
import BlogListing from "@/components/BlogListing/BlogListing"
import SectionSeparator from "@/components/DesignSystem/SectionSeparator";

import apolloClient, { USE_PREVIEW_CONTENT } from "@/lib/apollo-client";
import { ALL_ARTICLES_QUERY } from "@/lib/contentfulSchema";


export async function getServerSideProps({ params }) {
    console.log('Querying blog articles...');
    const { data, errors, error } = await apolloClient.query({
        query: ALL_ARTICLES_QUERY,
        variables: { preview: USE_PREVIEW_CONTENT },
        fetchPolicy: USE_PREVIEW_CONTENT ? "no-cache" : undefined,
    });

    console.log('Query result:', { data, errors, error });

    if (errors || error) {
        console.error('Error fetching blog articles:', errors || error);
        return { notFound: true };
    }

    if (!("blogArticleCollection" in data)) {
        console.error('No blog articles found in data');
        return { notFound: true };
    }

    console.log('Blog articles:', data.blogArticleCollection.items);

    return {
        props: {
            blogData: data.blogArticleCollection.items,
        },
    };

    if (errors || error) {
        return { notFound: true };
    };

    if (!("blogArticleCollection" in data)) {
        return { notFound: true };
    };

    return {
        props: {
            blogData: data.blogArticleCollection.items,
        },
    };
}

const BlogIndex = ({ blogData }) => {
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
            </Container>
        </Layout>
    );
};
export default BlogIndex;
