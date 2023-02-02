import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Blogs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Startup Armenia | Blogs</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
              Welcome To Blog Page
            </h3>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Blogs;
