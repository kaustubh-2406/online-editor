import { Project } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

type Props = {
  data: Project[];
};

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.DEPLOYED_URL;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(url + "/api/trpc/project.getAll");
  const data = await res.json();

  return {
    props: {
      // pretty weird but it works...
      data: data.result.data.json,
    },
  };
};

const AllProjectsPage: NextPage<Props> = ({ data }: Props) => {
  return (
    <div className="p-8">
      <h1 className="mb-16 text-3xl font-semibold">All Projects</h1>

      <div className="flex flex-col flex-wrap gap-8 sm:flex-row">
        {data.map((project) => (
          <div
            key={project.id}
            className="flex min-h-[100px] min-w-[150px] flex-1 flex-col justify-center gap-2 rounded-md bg-gray-200 p-4 shadow-sm"
          >
            <div className="px-2 text-xl font-semibold">{project.name}</div>
            <Link href={`/projects/${project.name}`} passHref>
              <a className="w-max rounded-md bg-blue-400 px-4 py-2 transition-all duration-150 hover:bg-blue-300">
                Check page
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
