import Head from "next/head";

import Layout from "@/components/layout";
import Container from "@/components/DesignSystem/Container";
import SectionSeparator from "@/components/DesignSystem/SectionSeparator";
import RichTextArea from "@/components/DesignSystem/RichTextArea";

import apolloClient, { USE_PREVIEW_CONTENT } from "@/lib/apollo-client";
import { RESUME_QUERY } from "@/lib/contentfulSchema";

export async function getServerSideProps({ params }) {
    const { data, errors, error } = await apolloClient.query({
        query: RESUME_QUERY,
        variables: { preview: USE_PREVIEW_CONTENT },
        fetchPolicy: USE_PREVIEW_CONTENT ? "no-cache" : undefined,
    });

    if (errors || error) {
        return { notFound: true };
    }

    return {
        props: {
            professionalSummary: 
                data.resumeExtraEntryCollection.items.filter(
                    (entry) => entry.type === "Professional Summary"
                )[0],
            skills: 
                data.resumeExtraEntryCollection.items.filter(
                    (entry) => entry.type === "Skill"
                ),
            awards: 
                data.resumeExtraEntryCollection.items.filter(
                    (entry) => entry.type === "Award"
                ),
            notableProjects: 
                data.resumeExtraEntryCollection.items.filter(
                    (entry) => entry.type === "Notable Project"
                ),
            experience: 
                data.resumeEntryCollection.items.filter(
                    (entry) => entry.type === "Experience"
                ),
            certifications: 
                data.resumeExtraEntryCollection.items.filter(
                    (entry) => entry.type === "Certification"
                ),
            education: 
                data.resumeEntryCollection.items.filter(
                    (entry) => entry.type === "Education"
                ),
        },
    };
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!dateString) return "Current";
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
};

const ResumeIndex = ({ professionalSummary, skills, awards, notableProjects, experience, certifications, education }) => {
    const skillsList = skills
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((skill) => 
                <li key={skill.sys.id}>{skill.title}</li>
        );

    const experienceList = experience
        .sort((a,b) => new Date(b.positionStartedOn) - new Date(a.positionStartedOn))
        .map((experience) => 
            <div key={experience.sys.id} className="row">
                <p className="h4 row">{experience.company}</p>
                <div className="row justify-content-between">
                    <p className="col fw-bold">{experience.positionTitle}</p>
                    <p className="col text-end">{formatDate(experience.positionStartedOn)} - {formatDate(experience.positionEndedOn)}</p>
                </div>
                <RichTextArea content={experience.positionSummary} />
            </div>
        );

    const educationList = education
        .sort((a,b) => new Date(b.positionStartedOn) - new Date(a.positionStartedOn))
        .map((education) => 
            <div key={education.sys.id} className="row">
                <p className="h4 row">{education.company}</p>
                <div className="row justify-content-between">
                    <p className="col fw-bold">{education.positionTitle}</p>
                    <p className="col text-end">{formatDate(education.positionStartedOn)} - {formatDate(education.positionEndedOn)}</p>
                </div>
                <RichTextArea content={education.positionSummary} />
            </div>
        );

    const awardsList = awards.map((award) => 
        <div key={award.sys.id} className="row">
            <p className="h4 row">{award.title}</p>
            <RichTextArea content={award.description} />
        </div>
    );

    const notableProjectsList = notableProjects.map((project) => 
        <div key={project.sys.id} className="row">
            <p className="h4 row">{project.title}</p>
            <RichTextArea content={project.description} />
        </div>
    );

    const certificationsList = certifications.map((certification) => 
        <div key={certification.sys.id} className="row">
            <p className="h4 row">{certification.title}</p>
            <RichTextArea content={certification.description} />
        </div>
    );

    return (
        <Layout>
            <Head>
                <title>{`Michael Youngblood's Resume`}</title>
            </Head>
            <Container>
                <div className="row d-flex flex-row justify-content-between align-items-end">
                        <h1 className="col fw-bold">
                            Michael Youngblood
                        </h1>
                        <p className="col text-end">
                            Software Engineer Manager
                        </p>                        
                </div>
                <SectionSeparator />
                {professionalSummary ? (
                    <div className="row">
                        <h2>Professional Summary</h2>
                        <RichTextArea content={professionalSummary.description} />
                    </div>
                ) : null}

                {skillsList.length > 0 ? (
                    <div className="row">
                        <h2>Skills</h2>
                        <ul>{skillsList}</ul>
                    </div>
                ) : null}

                {awardsList.length > 0 ? (
                    <div className="row">
                        <h2>Awards</h2>
                        {awardsList}
                    </div>
                ) : null}

                {notableProjectsList.length > 0 ? (
                    <div className="row">
                        <h2>Notable Projects</h2>
                        {notableProjectsList}
                    </div>
                ) : null }

                {experienceList.length > 0 ? (
                    <div className="row">
                        <h2>Professional Experience</h2>
                        {experienceList}
                    </div>
                ) : null}

                {certificationsList.length > 0 ? (
                    <div className="row">
                        <h2>Certifications</h2>
                        {certificationsList}
                    </div>
                ) : null}

                {educationList.length > 0 ? (
                    <div className="row">
                        <h2>Education</h2>
                        {educationList}
                    </div>
                ) : null}

            </Container>
        </Layout>
    );
};
export default ResumeIndex;