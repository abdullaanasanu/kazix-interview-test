import Image from "next/image";
import UpcomingMatchList from "@/components/upcoming/UpcomingMatchList";
import SelectedMatchList from "@/components/upcoming/SelectedMatchList";
import CompletedMatchList from "@/components/completed/CompletedMatchList";


export default function Home() {
  return (
    <main className={`px-8 py-4`}>

      <UpcomingMatchList />
      
    </main>
  );
}
