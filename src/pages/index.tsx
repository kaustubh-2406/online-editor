import Head from "next/head";
import { FormEvent } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("trying to submit");
  };

  return (
    <>
      <Head>
        <title>Create Project | Online Editor</title>
        <meta
          name="description"
          content="Online editor created with Next js and t3-stack."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <form
          className="flex max-w-lg flex-col gap-4 border-2 border-gray-500 p-8"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-8 text-2xl font-semibold">Create New Project</h1>

          <label className="text-gray-700">Project Name</label>
          <input
            required
            type="text"
            className="border-2 border-gray-600 px-4 py-2"
          />

          <button
            className="w-auto rounded-md bg-black py-2 px-4 text-white"
            type="submit"
          >
            Create Project
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
