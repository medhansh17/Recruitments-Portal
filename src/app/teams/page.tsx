import JoinTeam from "@/components/joining-page";
import ScrollIndicator from "@/components/scrollindicator";


export default function Teams(){
    return  <main className="min-h-screen">
        <JoinTeam teamName="Management" order='1'/>
        <JoinTeam teamName="Tech" order='2'/>
        <JoinTeam teamName="Design" order='1'/>
        <ScrollIndicator />

        </main>
}