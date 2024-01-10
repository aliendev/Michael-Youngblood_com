import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

{/* TODO: Finish the resume datasets */}
const corporateExperience = [
  {
    id: 0,
    company: "SunPower Corporation", 
    type: "Full-time",
    duration: "Feb 2019 - Present",
    summary: "",
    positions: [
      {
        id: 0, 
        title: "Content Strategist", 
        duration: "Feb 2019 - Nov 2022",
        location: "Austin, Texas Area",
        highlights: "",
      }, 
      {
        id: 1,
        title: "Technical Lead", 
        duration: "Apr 2022 - Jul 2023",
        location: "Austin, Texas Area",
        highlights: "",
      },       
      {
        id: 2,
        title: "Software Engineer Manager", 
        duration: "Jul 2023 - Present",
        location: "Austin, Texas Area",
        highlights: "",
      },       
    ]
  },
  {
    id: 1,
    company: "US2Consulting", 
    type: "Freelance",
    duration: "Jun 2021 - Jun 2022",
    location: "Remote",
    title: "Contract Content Strategist & SEO Specialist (+Web Developer)",
    summary: "",

  },
  {
    id: 2,
    company: "Paladin", 
    type: "Contract",
    duration: "Nov 2018 - May 2019",
    location: "Austin, TX",
    title: "Contract Web Developer",
    summary: "Worked with a private client to help establish a digital presence on their marketing team. Worked to help create and document a workflow for updating a staging site and programmatically updating the production site. Developed a new website from the ground up to be hosted and served from a static file server, as well as documented its own workflow. Helped create, document, and maintain an advertising strategy and documentation using Google Ad Manager, Adsense, Google Analytics, etc.",

  },
  {
    id: 3,
    company: "Arm", 
    type: "Full-time",
    duration: "Jun 2014 - Sep 2018",
    summary: "",
    positions: [
      {
        id: 0, 
        title: "UX Web Developer & Web Analyst", 
        duration: "",
        location: "Austin, Texas Area",
        highlights: "",
      }, 
      {
        id: 1,
        title: "Web Technical Lead", 
        duration: "",
        location: "Austin, Texas Area",
        highlights: "",
      },       
      {
        id: 2,
        title: "Web Technical Manager Manager", 
        duration: "",
        location: "Austin, Texas Area",
        highlights: "",
      },       
    ]
  },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Michael Youngblood, Software Engineer Manager, Blog and CV (Resume)`}</title>
        </Head>
        <Intro />
        <Container>
          
          <h1>Michael Youngblood</h1>
          <h2>Corporate Experience</h2>


          {/* #TODO: The resume sections needs to be styled */}
          {corporateExperience.map((company, index) => (
            <Grid key={company.id} container spacing={2} className='mb-10'>
              <Grid item xs={12}>
                <Item>{company.company}</Item>
                
              </Grid>
              <Grid item xs={4}>
                <Item>{company.duration}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>{company.type}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>{company.position}</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>{company.summary}</Item>
              </Grid>
            </Grid>
          ))}








          <h2>Education</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>Full Sail University</Item>
            </Grid>
            <Grid item xs={12}>
              <Item>Clover Park Technical College</Item>
            </Grid>
          </Grid>



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
