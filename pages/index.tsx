/* eslint-disable @next/next/no-img-element */
import { allPosts, Post } from "contentlayer/generated";
import { CustomDashedBorder } from "custom-dashed-border";
import { compareDesc, format, parseISO } from "date-fns";
import Head from "next/head";
import Link from "next/link";
import { AiFillStar, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  return (
    <li>
      <Link href={post.url}>
        <a className="group block rounded-md border border-gray-300 p-6 hover:ring-cyan hover:ring hover:ring-offset-4 hover:ring-offset-gray-100 hover:bg-cyan transition">
          <h2 className="text-xl font-semibold group-hover:text-gray-100">
            {post.title}
          </h2>
          <time
            dateTime={post.date}
            className="block text-gray-500 mt-1 group-hover:text-gray-100"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </a>
      </Link>
    </li>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  const [boxRef, setBoxRef] = useState<HTMLDivElement | null>(null);

  return (
    <div className="flex tracking-tight">
      <div className="max-w-[58rem] h-screen overflow-y-auto">
        <Head>
          <title>Kevin Lu</title>
        </Head>
        <div
          className="h-full"
          style={{
            position: "fixed",
            top: 0,
            left: "calc(5rem - 16px)",
          }}
        >
          <CustomDashedBorder
            left={{
              color: "#333",
              stripe: 16,
              spacing: 8,
              width: 1,
            }}
          />
        </div>
        <div
          className="h-full"
          style={{
            position: "fixed",
            top: 0,
            left: `calc(${
              boxRef?.getBoundingClientRect().width
            }px - 5rem + 16px)`,
          }}
        >
          <CustomDashedBorder
            left={{
              color: "#333",
              stripe: 16,
              spacing: 8,
              width: 1,
            }}
          />
        </div>
        <div className="h-24 px-20 py-4" ref={(ref) => setBoxRef(ref)} />
        <span className="font-pen text-[2rem] mx-24 text-gray-500 font-medium select-none">
          <img
            src="arrow-down.svg"
            alt="Down Arrrow"
            aria-hidden
            className="mr-2 inline -mb-10 z-50 relative"
          />
          An actual cesspool
        </span>
        <div className="relative w-full">
          <CustomDashedBorder
            bottom={{
              color: "#333",
              stripe: 16,
              spacing: 8,
              height: 1,
            }}
          />
        </div>
        <div className="flex items-center space-x-3 px-20 py-4">
          <a
            href="https://twitter.com/coderinblack"
            className="select-none flex items-center space-x-2 px-6 py-2.5 bg-gray-300 rounded-xl text-2xl font-semibold border border-gray-400 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-gray-100 focus:ring-purple"
          >
            <AiOutlineTwitter size={26} />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/coderinblack08"
            className="select-none flex items-center space-x-2 px-6 py-2.5 bg-gray-300 rounded-xl text-2xl font-semibold border border-gray-400 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-gray-100 focus:ring-purple"
          >
            <AiOutlineGithub size={26} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:kevin@graspable.app"
            className="select-none flex items-center space-x-2 text-gray-600 font-medium"
          >
            <img src="/ok.png" alt="Ok Emote" />
            <span className="text-2xl font-semibold">Let’s Connect</span>
          </a>
        </div>
        <div className="relative w-full">
          <CustomDashedBorder
            bottom={{
              color: "#333",
              stripe: 16,
              spacing: 8,
              height: 1,
            }}
          />
        </div>
        <div className="space-y-8 px-20 py-4 ">
          <h1 className="font-medium text-3xl leading-tight">
            Hi I’m{" "}
            <img src="/peace.png" alt="Peace emote" className="inline h-10" />{" "}
            Kevin Lu. I’m currently a student at{" "}
            <span className="text-success underline decoration-wavy underline-offset-4">
              Bellarmine College Preparatory
            </span>
            . Starting off as a web developer, I’m now struggling with
            competitive programming.
          </h1>
          <h2 className="text-gray-600 font-medium text-3xl leading-tight">
            My current tech stack comprises of React, Next.js, Typescript, tRPC,
            and Prisma.
          </h2>
        </div>
        <div className="relative w-full">
          <CustomDashedBorder
            bottom={{
              color: "#333",
              stripe: 16,
              spacing: 8,
              height: 1,
            }}
          />
        </div>
        <div className="text-xl px-20 py-4">
          <div className="flex space-x-6">
            <figure className="w-890 flex-shrink-0">
              <img src="/kevin.png" alt="Kevin Dressed Up" className="w-full" />
              <figcaption className="font-pen text-gray-500 text-2xl mt-2">
                The only “decent” picture I have lol
              </figcaption>
            </figure>
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-2">
                “ACHIEVEMENTS”
                <span className="font-pen text-[1.65rem]">-ish?</span>
              </h3>
              <ul className="font-medium space-y-2">
                <li>
                  <span className="text-gray-500 font-bold mr-2">—</span> USACO
                  Silver
                </li>
                <li>
                  <span className="text-gray-500 font-bold mr-2">—</span> 2x
                  AIME Qualifier
                </li>
                <li>
                  <span className="text-gray-500 font-bold mr-2">—</span> 2nd
                  BridgeHacks
                </li>
                <li>
                  <span className="text-gray-500 font-bold mr-2">—</span> Harker
                  Invitational #1 Team
                </li>
              </ul>
              <p className="font-medium mt-6">
                Last Summer, I built{" "}
                <a
                  href="https://joinpresage.com"
                  className="text-cyan underline underline-offset-4"
                >
                  <img
                    src="/presage.png"
                    alt="Presage emote"
                    className="inline h-6"
                  />{" "}
                  presage
                </a>
                , which surprisingly received lots of attention and even an
                invitation to become a pioneer{" "}
                <span className="text-gray-500">
                  (funding from a popular online accelerator)
                </span>
                . Recently, I’ve been trying to brush up on my algorithms and
                problem-solving skills in order to qualify for USACO gold &
                plat. On the side, I’ve been working on my Airtable alternative,{" "}
                <a
                  href="https://graspable.app"
                  className="text-cyan underline underline-offset-4"
                >
                  graspable
                </a>
                , using my take on the t3-stack.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-l border-gray-300 dotted-background p-8 font-medium text-lg">
        <h3 className="select-none">
          <img src="/hype.png" alt="Hype Emote" className="inline mr-2" />
          My "
          <span className="decoration-wavy underline underline-offset-4">
            chaotic
          </span>
          "{" "}
          <button className="inline px-2 rounded bg-cyan text-gray-100">
            side-projects
          </button>
          <button className="inline px-2 rounde bg-gray-300 text-gray-600 ml-2">
            blog
          </button>
        </h3>
        <div className="mt-8">
          <ProjectCard
            description="Built in the summer of 2021. Felt bored so I made a referral blogging platform. As you do with side projects, I rewrote this website multiple times with different designs, ideas, and tech-stacks. With over 150 people on the waitlist, I should probably launch it already...stay tuned!"
            url="https://joinpresage.com"
            repo="coderinblack08/presage"
          />
          <ProjectCard
            description="A lightweight alternative to Airtable/Trello/CRMs. Still in progress!"
            url="https://graspable.app"
            repo="coderinblack08/graspable"
          />
        </div>
      </div>
    </div>
    // <div className="mx-auto max-w-2xl py-20 px-8">
    //   <Head>
    //     <title>Kevin Lu</title>
    //   </Head>

    //   <div className="flex items-center justify-between mb-2">
    //     <h1 className="inline tracking-tight leading-relaxed text-4xl font-semibold">
    //       Kevin Lu
    //     </h1>
    //     <div className="flex items-center space-x-3">
    //       <a href="https://github.com/coderinblack08">
    //         <AiOutlineGithub size={24} />
    //       </a>
    //       <a href="https://twitter.com/coderinblack">
    //         <AiOutlineTwitter size={24} />
    //       </a>
    //     </div>
    //   </div>

    //   <ul className="space-y-4">
    //     {posts.map((post, idx) => (
    //       <PostCard key={idx} {...post} />
    //     ))}
    //   </ul>
    // </div>
  );
}
