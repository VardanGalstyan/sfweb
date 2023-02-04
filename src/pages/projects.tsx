import { type NextPage } from "next";
import Head from "next/head";
import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Startup Armenia | Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Projects/>
      </Layout>
    </>
  );
};

export default ProjectsPage;
