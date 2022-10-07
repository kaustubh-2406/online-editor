import { useRef, useState } from "react";
import { editor } from "monaco-editor";
import Editor from "@monaco-editor/react";
import { useDebouncedCallback } from "use-debounce";

import type { Dispatch, SetStateAction } from "react";

type Props = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

function EditorComponent({ state, setState }: Props) {
  const [internal, setInternal] = useState(state);

  // debounce state updation
  const debounced = useDebouncedCallback((value: string) => {
    setState(value);
  }, 500);

  return (
    <div className="h-full bg-[#1E1E1E]">
      <div className="w-full bg-[#212733]  p-2 px-4 font-semibold text-white opacity-80">
        Editor
      </div>

      {/* <div className="h-6 bg-white">Editor List</div> */}

      <div className="h-full w-full">
        <Editor
          theme="vs-dark"
          defaultLanguage="html"
          value={internal}
          onChange={(val) => {
            setInternal(val ?? "");
            debounced(val ?? "");
          }}
        />
      </div>
    </div>
  );
}

export default EditorComponent;
