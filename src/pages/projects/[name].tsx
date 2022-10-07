import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

// component library for creating split pane..
import SplitPane from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

import EditorComponent from "../../components/Editor";
import Filesystem from "../../components/Filesystem";
import Preview from "../../components/Preview";
import Terminal from "../../components/Terminal";

const helper = (param: string | string[] | undefined): string => {
  if (typeof param === "undefined") return "";
  else if (typeof param === "string") return param;
  else if (typeof param === "object") return param[0] || "";
  else return "";
};

const ProjectPage: NextPage = () => {
  const router: NextRouter = useRouter();
  const name = helper(router.query.name);

  const [state, setState] = useState("");

  const [hsizes, setHsizes] = useState(["80%", 200]);
  const [sizes, setSizes] = useState([200, "50%", "auto"]);

  const { isLoading, data } = trpc.useQuery(["project.exists", { name }]);

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
          <Filesystem projectName={name} files={data.project?.files || []} />
          <EditorComponent state={state} setState={setState} />
          <Preview state={state} />
        </SplitPane>

        <Terminal />
      </SplitPane>
    </div>
  );
};

export default ProjectPage;
