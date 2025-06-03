import Container from "../components/DesignSystem/Container";
import Layout from "../components/layout";
import Head from "next/head";
import PageFeaturedProduct from "../components/PageFeaturedProduct/PageFeaturedProduct";
import GithubActivity from "../components/GithubActivity/GithubActivity";

export default function Homepage() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Michael Youngblood, Software Engineer Manager, Blog and CV`}</title>
        </Head>
        <Container>
          {/* TODO: Make the breadcrumbs in the navigation work */}

          {/* TODO: Make favicon */}
          {/* TODO: Make a logo */}

          <PageFeaturedProduct />
          <GithubActivity />
          {/* <Features3Up /> */}
          {/* TODO: Make the Contact Form */}
          {/* <FeaturesBlogs /> */}

          {/* TODO: Make the Footer */}
        </Container>
      </Layout>
    </>
  );
}
