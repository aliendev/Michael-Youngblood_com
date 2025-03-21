import Container from "../components/DesignSystem/container";
import Layout from "../components/layout";
import Head from "next/head";
import PageFeaturedProduct from "../components/PageFeaturedProduct/PageFeaturedProduct";

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
          {/* <Features3Up /> */}
          {/* TODO: Make the Contact Form */}
          {/* <FeaturesBlogs /> */}

          {/* TODO: Make the Footer */}
        </Container>
      </Layout>
    </>
  );
}
