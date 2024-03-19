export default function Button() {
  return (
    <div className="w-[350px] h-[120px] flex  items-center bg-[url('/button-background.svg')] bg-contain bg-center bg-no-repeat z-10 relative">
      <div className="z-[-1] w-[40%] h-[98%] bg-[url('/button-white-left.svg')] bg-contain bg-center bg-no-repeat relative left-0"></div>
      <div className="z-[-2] w-[45%] h-[68%] bg-[url('/button-purple-left.svg')] absolute bg-contain bg-center bg-no-repeat  left-1"></div>
      <p className="text-main-pink drop-shadow-xl text-3xl inline-block absolute left-[50%] translate-x-[-50%] w-full text-center">
        JOIN THE TEAM
        <span className="absolute rounded-full bg-main-pink w-[50px] h-[50px] blur-[45px] right-[50%] translate-x-[50%]"></span>
      </p>
      <div className="z-[-1] w-[40%] h-[98%] bg-[url('/button-white-right.svg')] bg-contain bg-center bg-no-repeat absolute right-0"></div>
      <div className="z-[-2] w-[45%] h-[68%] bg-[url('/button-purple-right.svg')] absolute bg-contain bg-center bg-no-repeat  right-1"></div>
    </div>
  );
}
