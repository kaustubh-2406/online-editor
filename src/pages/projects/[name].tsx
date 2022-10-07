import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

const helper = (param: string | string[] | undefined): string => {
  if (typeof param === "undefined") return "";
  else if (typeof param === "string") return param;
  else if (typeof param === "object") return param[0] || "";
  else return "";
};

const ProjectPage: NextPage = () => {
  const router: NextRouter = useRouter();
  const { name } = router.query;

  const [state, setState] = useState("<h1>Hello world</h1>");

  const { isLoading, data } = trpc.useQuery([
    "project.exists",
    { name: helper(name) },
  ]);

  if (isLoading && !data) return <div>Loading...</div>;
  if (!data?.exists) return <div>Project doesnot exist..</div>;

  return (
    <div className="flex h-screen flex-wrap overflow-hidden">
      <div className="w-40 resize-x overflow-auto border-r-2 border-gray-500 p-4">
        <div className="mb-8">File system</div>

        <div className="font-semibold">{name}</div>
        <div className="flex flex-col gap-2">
          {data.project?.files.map((file) => (
            <div key={file.name}>{file.name}</div>
          ))}
        </div>
      </div>
      <div className="max-h-screen flex-1 resize-x overflow-scroll p-4 pb-60">
        {state}
      </div>
      <div className="w-40 resize-x overflow-auto">
        <div className="bg-blue-400 p-2 px-4 font-semibold text-white">
          Preview
        </div>
        <div className="p-2 px-4">
          <div dangerouslySetInnerHTML={{ __html: state }}></div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full resize-y overflow-auto bg-blue-400 p-20">
        Terminal
      </div>
    </div>
  );
};

export default ProjectPage;
