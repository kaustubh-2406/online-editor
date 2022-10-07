import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

// component library for creating split pane..
import SplitPane from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

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

  const [hsizes, setHsizes] = useState(["80%", 200]);
  const [sizes, setSizes] = useState([200, "50%", "auto"]);

  const { isLoading, data } = trpc.useQuery([
    "project.exists",
    { name: helper(name) },
  ]);

  if (isLoading && !data) return <div>Loading...</div>;
  if (!data?.exists) return <div>Project doesnot exist..</div>;

  return (
    <div className="h-[90vh]">
      <SplitPane
        className="flex h-full flex-col"
        split="horizontal"
        sizes={hsizes}
        onChange={setHsizes}
      >
        <SplitPane
          className="flex h-full w-screen overflow-hidden"
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
        >
          <div className="h-full bg-gray-200">
            <div className="bg-[#212733] p-2 px-4 font-semibold text-white opacity-80">
              File System
            </div>

            <div className="bg-gray-400 text-center">{name}</div>
            <div className="ml-2 flex flex-col gap-2">
              {data.project?.files.map((file) => (
                <div className="bg-gray-200" key={file.name}>
                  {file.name}
                </div>
              ))}
            </div>
          </div>
          <div className="h-full bg-[#d5d7d9]">
            <div className="bg-[#212733] p-2 px-4 font-semibold text-white opacity-80">
              Editor
            </div>
            {state}
          </div>
          <div className="h-full bg-[#a1a5a9]">
            <div className="bg-[#212733] p-2 px-4 font-semibold text-white opacity-80">
              Preview
            </div>
            <div
              className="p-2 px-4"
              dangerouslySetInnerHTML={{ __html: state }}
            ></div>
          </div>
        </SplitPane>
        <div className="h-full bg-red-700 font-mono text-white">Terminal</div>
      </SplitPane>
    </div>
  );
};

export default ProjectPage;
