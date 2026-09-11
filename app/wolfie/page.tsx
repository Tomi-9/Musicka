import Link from "next/link";
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Wolfie() {
    return (
   <>
        <div className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur border-b border-slate-900">
        <nav className="flex flex-row items-center justify-between pr-2 pl-6">
      <h2 className="text-3xl text-zinc-200">Musicka</h2>
      <div className="hidden md:flex items-center gap-1 h-20">
        <button className="text-md font-semibold hover:font-bold rounded m-4">Sign up</button>
        <button className="text-md font-bold bg-sky-600 hover:bg-sky-700 rounded-full px-8 hover:scale-105 transition">Log in</button>
      </div>
      </nav>
      <input id="nav" type="checkbox" className="peer hidden" />
      <label htmlFor="nav" className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-olive-900 text-2xl leading-none text-taupe-300 select-none">&#9776;</label>
      <div className="hidden peer-checked:flex h-screen md:hidden absolute left-0 right-0 top-15 flex-col gap-1 bg-black text-olive-800 border-b border-slate-200 p-3 font-bold">
          <Link href="#" className="px-3 py-2 rounded-lg text-white hover:bg-slate-400">Log in</Link>
          <Link href="#" className="px-3 py-2 rounded-lg text-white hover:bg-slate-500">Sign up</Link>
          <Link href='/' className='text-cyan-400 text-xl'>Homepage</Link>
    </div>
   
        
         </div>
        <div className="flex flex-col gap-5 mt-20">
                 <Link
                       href='/'
                       className='text-cyan-400 text-xl'
                       >
                       Homepage</Link>
            <Footer />
        </div>
        </>
    );
}