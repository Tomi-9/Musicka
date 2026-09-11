type AlbumCardProps = {
  title?: string;
  artist?: string;
};

export function AlbumCard({ title = "Night Drive", artist = "Musicka Originals" }: AlbumCardProps) {
  return (
    <article className="group w-44 shrink-0 sm:w-52">
      <div className="aspect-square overflow-hidden rounded-xl bg-zinc-800 shadow-lg transition-transform duration-200 group-hover:scale-[1.02]">
        <div className="flex h-full items-end bg-gradient-to-br from-zinc-600 via-zinc-900 to-black p-4">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-300">Musicka</span>
        </div>
      </div>
      <h3 className="mt-3 truncate font-semibold text-zinc-100">{title}</h3>
      <p className="truncate text-sm text-zinc-400">{artist}</p>
    </article>
  );
}
