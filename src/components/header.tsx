export default function Header(props: { title: string }) {
  return (
    <div className="flex flex-col justify-evenly text-white font-striger  w-max ">
      <div className="flex flex-row justify-between">
        <span className="bg-[url('/heading-top-left.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
        <span className="lg:text-6xl sm:text-4xl text-4xl">The</span>
        <span className="bg-[url('/heading-top-right.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
      </div>
      <div className="lg:text-8xl sm:text-6xl text-5xl mx-auto">
        {props.title}
      </div>
      <div className="flex flex-row justify-between">
        <span className="bg-[url('/heading-bottom-left.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
        <span className="lg:text-6xl sm:text-4xl text-4xl">Team</span>
        <span className="bg-[url('/heading-bottom-right.svg')] bg-contain bg-center bg-no-repeat w-[35%]"></span>
      </div>
    </div>
  );
}
