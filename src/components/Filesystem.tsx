type Props = {
  projectName: string;
  files: { name: string }[];
};

function Filesystem({ projectName, files }: Props) {
  return (
    <div className="h-full bg-gray-200">
      <div className="bg-[#212733] p-2 px-4 font-semibold text-white opacity-80">
        File System
      </div>

      <div className="bg-gray-400 px-2">{projectName}</div>

      {/* File list */}
      <ul className="mx-2 flex flex-col gap-2">
        {files.map((file) => (
          <li className="bg-gray-200" key={file.name}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filesystem;
