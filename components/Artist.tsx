import React from "react";
import Image from "next/image";

interface ArtistProps {
  src: any;
  name: string;
  spotify: string;
  social: { name: string; url: string };
}

export const Artist: React.FC<ArtistProps> = ({
  name,
  spotify,
  src,
  social,
}) => {
  return (
    <article className="flex items-center space-x-4">
      <div className="rounded-lg overflow-hidden w-16 h-16">
        <Image src={src} alt={name} />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold">{name}</h3>
        <p>
          <a href={social.url} className="hover:underline">
            🐦 {social.name}
          </a>{" "}
          ·{" "}
          <a href={spotify} className="hover:underline">
            🎵 Spotify
          </a>
        </p>
      </div>
    </article>
  );
};
