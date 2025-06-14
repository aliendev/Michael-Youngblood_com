import Head from "next/head";

import Layout from "@/components/layout";
import Container from "@/components/DesignSystem/Container";
import SectionSeparator from "@/components/DesignSystem/SectionSeparator";
import RichTextArea from "@/components/DesignSystem/RichTextArea";

import apolloClient, { USE_PREVIEW_CONTENT } from "@/lib/apollo-client";
import { RESUME_PROFESSIONAL_SUMMARY_QUERY } from "@/lib/contentfulSchema";

export async function getServerSideProps({ params }) {
    console.log('Querying resume professional summary...');
    const { data, errors, error } = await apolloClient.query({
        query: RESUME_PROFESSIONAL_SUMMARY_QUERY,
        variables: { preview: USE_PREVIEW_CONTENT },
        fetchPolicy: USE_PREVIEW_CONTENT ? "no-cache" : undefined,
    });

    console.log('Query result:', { data, errors, error });

    if (errors || error) {
        console.error('Error fetching professional summary:', errors || error);
        return { notFound: true };
    }

    if (!("resumeExtraEntryCollection" in data)) {
        console.error('No professional summary found in data');
        return { notFound: true };
    }

    console.log('Professional summary:', data.resumeExtraEntryCollection.items);

    return {
        props: {
            professionalSummary: data.resumeExtraEntryCollection.items[0],
        },
    };
};

const ResumeIndex = ({ professionalSummary }) => {
    return (
        <Layout>
            <Head>
                <title>{`Michael Youngblood's Resume`}</title>
            </Head>
            <Container>
                <div className="row d-flex flex-row justify-content-between align-items-end">
                        <h1 className="col font-bold">
                            Michael Youngblood
                        </h1>
                        <p className="col text-end">
                            Software Engineer Manager
                        </p>                        
                </div>
                <SectionSeparator />
                <div className="row">
                    <h2>Professional Summary</h2>
                    <RichTextArea content={professionalSummary.description} />
                </div>
            </Container>
        </Layout>
    );
};
export default ResumeIndex;