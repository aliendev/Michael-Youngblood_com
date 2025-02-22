import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Hero from '../components/hero/hero'


export default function Index() {

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

          <Hero />
          {/* <Features3Up /> */}
          {/* TODO: Make the Contact Form */}
          {/* <FeaturesBlogs /> */}

          {/* TODO: Make the Footer */}

        </Container>
      </Layout>
    </>
  )
}

