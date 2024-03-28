import JoinTeam from "@/components/joining-page";
import ScrollIndicator from "@/components/scrollindicator";
import Button from "@/components/button";
import Link from "next/link";

export default function Teams() {
  return (
    <main className="min-h-screen">
      <JoinTeam
        teamName="Management"
        order="1"
        titles={["P&M", "Editotrial", "Events"]}
      />
      <JoinTeam
        teamName="Tech"
        order="2"
        titles={["App", "Web", "AI/ML", "Research", "DevOps"]}
      />
      <JoinTeam
        teamName="Design"
        order="1"
        titles={["UI/UX", "Graphic Design", "Video"]}
      />
      <div className=" flex justify-center items-center mb-36">
        <Link href="/dashboard">
          <Button text="Go to Dashboard" />
        </Link>
      </div>
      <ScrollIndicator />
    </main>
  );
}
