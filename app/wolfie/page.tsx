import Link from "next/link";
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Wolfie() {
    return (
   <>
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
