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
  const editorRef = useRef<editor.IStandaloneCodeEditor>(null);
  const [internal, setInternal] = useState(state);

  // debounce state updation
  const debounced = useDebouncedCallback((value: string) => {
    setState(value);
  }, 500);

  return (
    <div className="h-full bg-[#d5d7d9]">
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
          onMount={(editor) => {
            // had to do this :(
            editorRef.current = editor;
          }}
        />
      </div>
    </div>
  );
}

export default EditorComponent;
