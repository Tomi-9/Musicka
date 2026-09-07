'use client'

import { useState } from 'react';
//import { MusicSlider } from '@/components/ui/seekslider';
import { Slider } from '@/components/ui/slider'
import {
    Play,
    Pause,
    VolumeX,
    SkipForward,
    SkipBack,
    Volume1,
    Heart,
} from 'lucide-react';


export function MediaPlayer() {
    const [playing, setPlaying] = useState<boolean>(false);
    const [favourite, setFavourite] = useState<boolean>(false);

    return (
        <div className="bg-zinc-950 w-screen h-20 overflow-x-hidden">
            <div className="flex flex-row gap-8 items-center justify-center">
                <button
                    onClick={() => setFavourite(!favourite)}>
                 {favourite ? <Heart className="fill-[#dc2626] text-red-600 w-8 h-7" strokeWidth={1} /> : 
                 <Heart className="w-8 h-7" strokeWidth={1} />}
                </button>
                <div className="flex flex-row gap-6 items-center justify-center">
                    <SkipBack />
                    <button
                        onClick={() => setPlaying(!playing)}
                    >
                        {playing ? <Pause className="w-14 h-14 fill-[#09090b] bg-white rounded-full p-3" strokeWidth={1} /> : <Play className="w-14 h-14 fill-[#09090b] bg-white rounded-full p-3" />}
                    </button>
                    <SkipForward className="w-7 h-7" />
                </div>
                <div><Slider defaultValue={[33]} max={100} step={1} /> </div>
                <Volume1 className="w-8 h-8" />
            </div>
        </div>
    );
};

/* <Play />
<Pause />
<VolumeX className=""/>
<SkipForward />
<SkipBack />
<Volume1 />
<Heart /> */