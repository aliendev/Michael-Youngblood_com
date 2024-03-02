import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

{/* TODO: Finish the resume datasets */ }
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

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Michael Youngblood, Software Engineer Manager, Blog and CV (Resume)`}</title>
        </Head>

        <Container>

          <h1>Michael Youngblood</h1>


          <h2>Corporate Experience</h2>
          {/* #TODO: The resume sections needs to be styled */}
          {corporateExperience.map((company, index) => (
            <div key={company.id} container className='mb-10'>
              <h4>{company.company}</h4>
              {company.positions ? (
                <>
                  <div class="row">
                    {company.type ? (<p class='col-sm'>{company.type}</p>) : ("")}
                    {company.duration ? (<p class='col-sm'>{company.duration}</p>) : ("")}
                  </div>
                  <p>{ company.summary }</p>
                  {company.positions.map(( position, index ) => (
                    <div key={position.id}>
                      {position.title ? (<p class='col- col-md-6'>{position.title}</p>) : ("")}
                      {position.duration ? (<p class='col- col-md-6'>{position.duration}</p>) : ("")}
                      {position.location ? (<p class='col- col-md-6'>{position.location}</p>) : ("")}
                      {position.highlights ? (<p class='col- col-md-6'>{position.highlights}</p>) : ("")}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div class="row">
                    {company.title ? (<p class='col- col-md-6'>{company.title}</p>) : ("")}
                    {company.type ? (<p class='col-sm'>{company.type}</p>) : ("")}
                    {company.location ? (<p class='col-sm'>{company.location}</p>) : ("")}
                    {company.duration ? (<p class='col-sm'>{company.duration}</p>) : ("")}
                  </div>
                  <div class="row">
                    {company.summary}
                  </div>
                </>
              )}




            </div>
          ))}


          <h2>Education</h2>



        </Container>
      </Layout>
    </>
  )
}

