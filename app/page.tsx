import Footer from "@/components/footer";
import { MediaPlayer } from "@/components/ui/mediaplayer";
import { AlbumCard } from "@/components/ui/albumcard";
import { MusicCard } from "@/components/ui/musiccard";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50 font-sans selection:bg-teal-800 dark:bg-black">
      <main className="flex w-full flex-1 flex-col gap-10 bg-white px-4 pb-32 pt-8 dark:bg-black sm:px-8 lg:px-12">
        <section aria-labelledby="albums-heading" className="w-full">
          <h1 id="albums-heading" className="mb-5 text-2xl font-bold text-zinc-100 sm:text-3xl">
            Albums
          </h1>
          <div className="w-full overflow-x-auto pb-3">
            <div className="flex min-w-max gap-5">
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
            </div>
          </div>
        </section>

        <section aria-labelledby="songs-heading" className="w-full">
          <h2 id="songs-heading" className="mb-5 text-2xl font-bold text-zinc-100 sm:text-3xl">
            Songs
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </div>
        </section>
      </main>
      <MediaPlayer />
      <Footer />
    </div>
  );
}
