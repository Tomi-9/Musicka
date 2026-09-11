import Image from 'next/image';
import { musicans } from '../database/placeholder-data';
import Link from 'next/link';

export default function AlbumnMusic() {
return (
<div className=''>
   <div className="w-3/4 overflow-x-hidden">
      <h1 className="text-2xl">Recently played</h1>
      <div className='grid grid-cols-4 gap-2'>
        {musicans.map(musican => (
          <div key={musican.id} className="bg-zinc-900/40 w-43 h-auto px-5 py-2 rounded-md object-cover lg:hover:-translate-y-1 transition duration-300">
          <div  className="flex flex-col gap-2 justify-center text-left aspect-video">
     <Image
             src={musican.image_url}
             width={500}
             height={500}
             className="w-auto h-auto rounded-md"
             alt={musican.name}
           />
           <p className='mt-1'>{musican.name}</p>
           </div>
           </div>
           ))}
           </div>
           </div>
           <div className='flex gap-5 m-18'>
            <Link
           href='/'
           className='text-cyan-400 text-xl'
           >
           Homepage</Link>
           </div>
 </div>
  
);
}



//