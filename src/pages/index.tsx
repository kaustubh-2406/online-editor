import Head from "next/head";
import { FormEvent, useState } from "react";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import Router from "next/router";

const Home: NextPage = () => {
  const [projName, setProjName] = useState("");
  const [available, setAvailable] = useState(true);
  const [error, setError] = useState("");

  const createProject = trpc.useMutation(["project.create"]);
  const projNameAvailable = trpc.useMutation(["project.check-available"]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    projNameAvailable.mutate(
      { name: projName },
      {
        onSuccess: ({ available }) => {
          if (!available) {
            setError("Project name alredy taken");
            setAvailable(false);
            return;
          }

          setAvailable(true);
          createProject.mutate(
            { name: projName },
            {
              onSuccess(data) {
                const { name } = data;
                Router.push(`/projects/${name}`);
              },
              onError() {
                setError("Creation failed... Try after sometime.");
              },
            }
          );
        },
        onError(error) {
          console.log(error);
          setError(error.message);
        },
      }
    );
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

      <main className="container mx-auto flex h-[90vh] flex-col items-center justify-center p-4">
        <form
          className="flex max-w-lg flex-col gap-4 border-2 border-gray-500 p-8"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-8 text-2xl font-semibold">Create New Project</h1>

          <label className="text-gray-700">Project Name</label>
          <input
            required
            type="text"
            value={projName}
            onChange={(e) => setProjName(e.target.value)}
            className="border-2 border-gray-600 px-4 py-2"
          />

          {!available && <span className="text-red-500">{error}</span>}

          <button
            type="submit"
            disabled={!available}
            className="w-auto rounded-md bg-black py-2 px-4 text-white"
          >
            Create Project
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
