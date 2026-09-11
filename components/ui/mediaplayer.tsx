'use client'

import { useState } from 'react'
import {
  Heart,
  Maximize2,
  Pause,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from 'lucide-react'
import { Slider } from '@/components/ui/slider'

export function MediaPlayer() {
  const [playing, setPlaying] = useState(false)
  const [favourite, setFavourite] = useState(false)

  return (
    <section
      aria-label="Media player"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-zinc-950/95 px-3 py-2 text-zinc-100 shadow-2xl backdrop-blur-md sm:px-5"
    >
      <div className="mx-auto flex min-h-16 max-w-screen-xl items-center justify-between gap-2 sm:gap-6">
        <div className="flex min-w-0 basis-0 flex-1 items-center gap-2 sm:gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-xs font-medium text-zinc-400">
            ART
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Chaise Lounge</p>
            <p className="truncate text-xs text-zinc-400">Wet Leg</p>
          </div>
          <button
            type="button"
            aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
            aria-pressed={favourite}
            onClick={() => setFavourite((value) => !value)}
            className="ml-auto shrink-0 rounded-full p-2 text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <Heart className={favourite ? 'fill-red-600 text-red-600' : ''} size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex min-w-0 basis-0 flex-1 flex-col gap-1">
          <div className="flex items-center justify-center gap-4">
            <button type="button" aria-label="Shuffle" className="hidden text-zinc-400 transition-colors hover:text-zinc-100 sm:block">
              <Shuffle size={16} strokeWidth={1.5} />
            </button>
            <button type="button" aria-label="Previous track" className="text-zinc-300 transition-colors hover:text-zinc-100">
              <SkipBack size={18} fill="currentColor" />
            </button>
            <button
              type="button"
              aria-label={playing ? 'Pause' : 'Play'}
              aria-pressed={playing}
              onClick={() => setPlaying((value) => !value)}
              className="flex size-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-950 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              {playing ? <Pause size={19} fill="currentColor" /> : <Play className="ml-0.5" size={19} fill="currentColor" />}
            </button>
            <button type="button" aria-label="Next track" className="text-zinc-300 transition-colors hover:text-zinc-100">
              <SkipForward size={18} fill="currentColor" />
            </button>
            <button type="button" aria-label="Repeat" className="hidden text-zinc-400 transition-colors hover:text-zinc-100 sm:block">
              <Repeat2 size={16} strokeWidth={1.5} />
            </button>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-mono text-[10px] text-zinc-500">0:00</span>
            <Slider aria-label="Song progress" defaultValue={[0]} max={100} step={1} className="flex-1 [&_[data-slot=slider-track]]:h-1 [&_[data-slot=slider-track]]:bg-zinc-700 [&_[data-slot=slider-range]]:bg-zinc-100 [&_[data-slot=slider-thumb]]:size-3 [&_[data-slot=slider-thumb]]:border-zinc-100 [&_[data-slot=slider-thumb]]:bg-zinc-100" />
            <span className="font-mono text-[10px] text-zinc-500">3:16</span>
          </div>
        </div>

        <div className="hidden min-w-0 basis-0 items-center justify-end gap-3 text-zinc-400 sm:flex sm:flex-1 sm:gap-4">
          <Volume1 size={18} strokeWidth={1.5} />
          <Slider aria-label="Volume" defaultValue={[70]} max={100} step={1} className="w-20 [&_[data-slot=slider-track]]:h-1 [&_[data-slot=slider-track]]:bg-zinc-700 [&_[data-slot=slider-range]]:bg-zinc-100 [&_[data-slot=slider-thumb]]:size-3" />
          <button type="button" aria-label="Fullscreen player" className="transition-colors hover:text-zinc-100">
            <Maximize2 size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
