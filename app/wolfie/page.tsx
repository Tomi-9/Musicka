import Image from 'next/image';
import Footer from '@/components/footer';

export default function Wolfie() {
    return (
        <div>
        <div className="flex flex-col items-center my-8">
        <div className="">
    <Image
        src="/moat.webp"
        width={500}
        height={770}
        className=""
        alt="Moat"
      />
        </div>
        <div className="">
            <Footer />
        </div>
        </div>
        </div>
    );
}