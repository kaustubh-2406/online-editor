import { useRef } from "react";
import { editor } from "monaco-editor";
import Editor from "@monaco-editor/react";

import type { Dispatch, SetStateAction } from "react";

type Props = {
  setState: Dispatch<SetStateAction<string>>;
};

function EditorComponent({ setState }: Props) {
  const editorRef = useRef<editor.IStandaloneCodeEditor>(null);

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
          onChange={(val) => setState(val ?? "")}
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
