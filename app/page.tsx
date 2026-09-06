import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { MediaPlayer} from '@/components/ui/mediaplayer';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black selection:bg-teal-800">
      <main className="flex flex-1 w-screen max-w-screen flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <nav className="flex items-center gap-6 text-center justify-between mx-auto w-1/2 bg-gradient-to-r from-stone-900 via-cyan-950 to-olive-950 pr-2 pl-6 rounded">
          <h2 className="text-3xl text-white-500">Musicka</h2>
          <Navbar />
        </nav>
        <div className="overflow-x-hidden">
        <Link
        href="/cards"
        >
          Album card
        </Link>
       <a href="">

       </a>
        </div>
        <div className="">
          <MediaPlayer />
          </div> 
      </main>
      <div className="overflow-x-hidden">
      <Footer />
      </div>
    </div> //target="_blank"  rel="noopener noreferrer"       
  );
}
