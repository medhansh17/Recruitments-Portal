export default function Button() {
  return (
    <div className="sm:w-[350px] sm:h-[120px] w-[300px] h-[90px] flex items-center bg-[url('/button-background.svg')] bg-contain bg-center bg-no-repeat z-10 relative group hover:scaleX-105 ">
      <div className="z-[-1] w-[40%] h-[98%] bg-[url('/button-white-left.svg')] bg-contain bg-center bg-no-repeat relative left-0 group-hover:-translate-x-2 duration-[300ms] ease-in"></div>
      <div className="z-[-2] w-[40%] h-[68%] bg-[url('/button-purple-left.svg')] absolute bg-contain bg-center bg-no-repeat  left-1 group-hover:-translate-x-2 duration-[300ms] ease-in"></div>
      <p className="text-main-pink drop-shadow-xl text-2xl sm:text-[1.75rem] inline-block absolute left-[50%] translate-x-[-50%] w-full text-center group-hover:scaleY-110 duration-[300ms] ease-in">
        JOIN THE TEAM
        <span className="absolute rounded-full bg-main-pink w-[45px] h-[45px] blur-[55px] right-[50%] translate-x-[50%]"></span>
      </p>
      <div className="z-[-1] w-[40%] h-[98%] bg-[url('/button-white-right.svg')] bg-contain bg-center bg-no-repeat absolute right-0 group-hover:translate-x-2 duration-[300ms] ease-in"></div>
      <div className="z-[-2] w-[40%] h-[68%] bg-[url('/button-purple-right.svg')] absolute bg-contain bg-center bg-no-repeat  right-1 group-hover:translate-x-2 duration-[300ms] ease-in"></div>
    </div>
  );
}
