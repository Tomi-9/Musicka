import Image from "next/image";
import Footer from "@/components/footer";
import { MediaPlayer} from "@/components/ui/mediaplayer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black selection:bg-teal-800 h-dvh">
      <main className="flex flex-1 w-screen max-w-screen flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <div className="overflow-x-hidden">
        <Link
        href="/cards" 
        className="ml-15 text-cyan-400 text-2xl"
        >
          Album card
        </Link>
        </div>
        <div className="">
          <MediaPlayer />
          </div> 
      </main>
      <div className="overflow-x-hidden">
      <Footer />
      </div>
    </div> 
    //target="_blank"  rel="noopener noreferrer"       
  );
}
