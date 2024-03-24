import Button from "./button";
import Header from "./header";

type joinProps = {
  teamName: string;
  order: string;
};

export default function JoinTeam({teamName,order}:joinProps) {
  return (
    <div className={`flex ${order==='1'?'flex-col md:flex-row':'flex-col md:flex-row-reverse'}  justify-evenly items-center h-screen w-full`}>
      <Header title={teamName} />
      <Button text="JOIN THE TEAM"/>
    </div>
  );
}
