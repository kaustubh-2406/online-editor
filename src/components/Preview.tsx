type Props = {
  state: string;
};

function Preview({ state }: Props) {
  return (
    <div className="h-full">
      <div className="bg-[#212733] p-2 px-4 font-semibold text-white opacity-80">
        Preview
      </div>
      <div className="p-2 px-4" dangerouslySetInnerHTML={{ __html: state }} />
    </div>
  );
}

export default Preview;
