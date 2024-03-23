import Button from "./button";
import Header from "./header";

export default function JoinTeam({teamName,order}) {
  return (
    <div className={`flex ${order==='1'?'flex-col md:flex-row':'flex-col md:flex-row-reverse'}  justify-evenly items-center h-screen w-full`}>
      <Header title={teamName} />
      <Button />
    </div>
  );
}
