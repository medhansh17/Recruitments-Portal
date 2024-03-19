export default function Header(props: { title: string }) {
  return (
    <div className="flex flex-col justify-evenly text-white font-striger w-[40%]">
      <div className="flex flex-row justify-evenly">
        <span className="bg-[url('/heading-top-left.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
        <span className="text-5xl">The</span>
        <span className="bg-[url('/heading-top-right.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
      </div>
      <div className="text-8xl mx-auto">{props.title}</div>
      <div className="flex flex-row justify-evenly">
        <span className="bg-[url('/heading-bottom-left.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
        <span className="text-5xl ">Team</span>
        <span className="bg-[url('/heading-bottom-right.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
      </div>
    </div>
  );
}
