import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Michael Youngblood, Software Engineer Manager, Blog and CV`}</title>
        </Head>
        <Intro />
        <Container>
          {/* TODO: Make the breadcrumbs in the navigation work */}
          {/* TODO: Make the breadcrumbs in the navigation align to the name in the logo */}


          {/* TODO: Make the Hero */}
          {/* TODO: Make the Top Call-outs / Features */}
          {/* TODO: Make the Contact Form */}
          {/* TODO: Make the Latest blog posts */}

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
