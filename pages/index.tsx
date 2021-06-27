import Image from "next/image";
import React from "react";
import { Artist } from "../components/Artist";
import { Navbar } from "../components/Navbar";
import paper from "../public/icons/paper.png";
import play from "../public/icons/play.png";
import wayv from "../public/wayv.jpeg";
import wowkie from "../public/wowkie.jpeg";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 pb-24">
      <Navbar />
      <header>
        <h1 className="font-display leading-tight text-4xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight font-bold mt-2">
          Code. <br />
          Math & Physics. <br />
          Dreamer.
        </h1>
        <p className="text-gray-600 mt-6">
          An idiot learning aloud about trending frameworks, languages, and
          stuff I just learned.
        </p>
        <p className="font-semibold mt-2">
          Powered by <span className="text-yellow">Presage</span> ·{" "}
          <a
            href="https://twitter.com/coderinblack"
            className="hover:underline"
          >
            🐦 @coderinblack
          </a>
        </p>
      </header>
      <main className="relative mt-16">
        <div>
          <div className="inline-flex items-center justify-center p-2 rounded-xl bg-purple-200/75">
            <Image src={paper} alt="Paper Icon" width={36} height={36} />
          </div>
          <h2 className="font-display text-3xl font-bold mt-4">Blog Posts</h2>
          <p className="text-gray-400 mt-2">
            Coming Soon (After Presage Release)
          </p>
        </div>
        {/* <aside className="absolute top-0 left-0 hidden lg:block origin-top-left rotate-90 -translate-x-8 text-gray-400 opacity-50">
          <span className="text-gray-500 font-medium">Please read them,</span>{" "}
          it would mean a lot
        </aside> */}
        <div className="mt-16">
          <div className="inline-flex items-center justify-center p-2 rounded-xl bg-pink-200/75">
            <Image src={play} alt="Play Icon" width={36} height={36} />
          </div>
          <h2 className="font-display text-3xl font-bold mt-4">
            Music Obsessions
          </h2>
          <p className="text-gray-600 mt-2">
            Don’t judge my taste in music lol
          </p>
          <div className="space-y-8 mt-8">
            <Artist
              name="大张伟 (Wowkie Zhang)"
              src={wowkie}
              social={{ name: "Weibo", url: "https://weibo.com/dazhangwei831" }}
              spotify="https://open.spotify.com/artist/3RIgMUtdfRx98Lm5bXM3GD"
            />
            <Artist
              name="NCT WayV"
              src={wayv}
              social={{
                name: "Twitter",
                url: "https://twitter.com/WayV_official",
              }}
              spotify="https://open.spotify.com/artist/1qBsABYUrxg9afpMtyoFKz"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
