import Image from "next/image";

type ArtistCardProps = {
  name: string;
  imageUrl: string;
};

export function ArtistCard({ name, imageUrl }: ArtistCardProps) {
  return (
    <article className="group flex w-28 shrink-0 flex-col items-center text-center sm:w-32">
      <div className="relative aspect-square w-full overflow-hidden rounded-full bg-zinc-800 shadow-lg ring-1 ring-zinc-800 transition-transform duration-200 group-hover:scale-[1.03]">
        <Image
          src={imageUrl}
          alt={`${name} artist portrait`}
          fill
          sizes="(min-width: 640px) 128px, 112px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 w-full truncate font-semibold text-zinc-100">{name}</h3>
    </article>
  );
}
