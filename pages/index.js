import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import Hero from '../components/hero'
import Features3Up from '../components/features-3up'
import FeaturesBlogs from '../components/features-blogs'


export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
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

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
