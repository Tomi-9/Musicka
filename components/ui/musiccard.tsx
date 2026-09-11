type MusicCardProps = {
  title?: string;
  artist?: string;
};

export function MusicCard({ title = "Chase Lounge", artist = "Wet Leg" }: MusicCardProps) {
  return (
    <article className="flex min-w-0 items-center gap-4 rounded-xl bg-zinc-900/70 p-3 transition-colors hover:bg-zinc-800">
      <div className="size-16 shrink-0 rounded-lg bg-gradient-to-br from-zinc-500 via-zinc-800 to-black" aria-hidden="true" />
      <div className="min-w-0">
        <h3 className="truncate font-semibold text-zinc-100">{title}</h3>
        <p className="truncate text-sm text-zinc-400">{artist}</p>
      </div>
    </article>
  );
}
