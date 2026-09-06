import Image from 'next/image';
import { musicans } from '../database/placeholder-data';
import { MusicSlider } from '@/components/ui/seekslider';
import Link from 'next/link';

export default function AlbumnMusic() {
return (
<div className=''>
   <div className="w-3/4 overflow-x-hidden">
      <h1>Recently played</h1>
      <div className='grid grid-cols-4 gap-2'>
        {musicans.map(musican => (
          <div key={musican.id} className='flex flex-col justify-center bg-neutral-900 px-5 py-2 w-43 h-auto rounded text-left'>
     <Image
             src={musican.image_url}
             width={500}
             height={500}
             className='w-auto h-auto'
             alt={musican.name}
           />
           <p className='mt-1'>{musican.name}</p>
           </div>
           ))}
           </div>
           </div>
           <div className='w-1/2 m-9'>
            <MusicSlider />
           </div>
           <div className='flex gap-5 m-18'>
           <Link
           href="../sidebar"
           >
           Side Bar</Link>
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