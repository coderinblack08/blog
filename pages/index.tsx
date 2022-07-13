/* eslint-disable @next/next/no-img-element */
import * as Tabs from "@radix-ui/react-tabs";
import { allPosts, Post } from "contentlayer/generated";
import { CustomDashedBorder } from "custom-dashed-border";
import { compareDesc, format, parseISO } from "date-fns";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { ProjectCard } from "../components/ProjectCard";
import { useMediaQuery } from "../lib/useMediaQuery";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const PostCard: React.FC<Post> = (post) => {
  return (
    <li>
      <Link href={post.url} passHref>
        <a
          rel="noopener"
          className="group block bg-gray-100 rounded-md border border-gray-300 p-6 hover:ring-cyan hover:ring hover:ring-offset-4 hover:ring-offset-gray-100 hover:bg-cyan transition"
        >
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
};

export default function Home({ posts }: { posts: Post[] }) {
  const [boxRef, setBoxRef] = useState<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ x: 0, width: 0 });
  const isBig = useMediaQuery(768);

  useEffect(() => {
    const updateDimensions = () => {
      if (boxRef) {
        const { x, width } = boxRef.getBoundingClientRect();
        setDimensions({ x, width });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions, true);
    return () => {
      window.removeEventListener("resize", updateDimensions, true);
    };
  }, [boxRef]);

  return (
    <div className="tracking-tight">
      <Head>
        <title>Kevin Lu</title>
      </Head>
      <div className="relative w-full">
        <div
          className="h-full"
          style={{
            position: "absolute",
            top: 0,
            left: `calc(${dimensions.x}px + ${isBig ? "4rem" : "1rem"})`,
          }}
        >
          <CustomDashedBorder
            left={{
              color: "#333",
              stripe: 12,
              spacing: 5,
              width: 1,
            }}
          />
        </div>
        <div
          className="h-full"
          style={{
            position: "absolute",
            top: 0,
            left: `calc(${
              dimensions.x! + boxRef?.getBoundingClientRect().width!
            }px - ${isBig ? "4rem" : "1rem"})`,
          }}
        >
          <CustomDashedBorder
            left={{
              color: "#333",
              stripe: 12,
              spacing: 5,
              width: 1,
            }}
          />
        </div>
        <div
          className="max-w-[58rem] mx-auto h-0 md:h-24 px-8 md:px-20 py-2 md:py-4"
          ref={(ref) => setBoxRef(ref)}
        />
        <div className="relative w-full">
          <CustomDashedBorder
            bottom={{
              color: "#333",
              stripe: 12,
              spacing: 5,
              height: 1,
            }}
          />
        </div>
        <div className="max-w-[58rem] mx-auto items-center space-x-3 px-8 md:px-20 py-4 flex">
          <div className="relative">
            <div className="absolute left-8 -top-16 w-64 font-pen text-[2rem] text-gray-500 font-medium select-none hidden md:block">
              <img
                src="arrow-down.svg"
                alt="Down Arrrow"
                aria-hidden
                className="mr-2 inline -mb-12 z-50 relative"
              />
              An actual cesspool
            </div>
            <a
              href="https://twitter.com/coderinblack"
              className="select-none flex items-center space-x-2 p-1.5 md:px-6 md:py-2.5 rounded-xl text-2xl font-semibold border-2 border-gray-300 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-gray-100 focus:ring-purple"
            >
              <AiOutlineTwitter size={26} />
              <span className="hidden md:block">Twitter</span>
            </a>
          </div>
          <a
            href="https://github.com/coderinblack08"
            className="select-none flex items-center space-x-2 p-1.5 md:px-6 md:py-2.5 rounded-xl text-2xl font-semibold border-2 border-gray-300 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-gray-100 focus:ring-purple"
          >
            <AiOutlineGithub size={26} />
            <span className="hidden md:block">GitHub</span>
          </a>
          <a
            href="mailto:kevin@graspable.app"
            className="select-none flex items-center space-x-2 text-gray-600 font-medium p-1.5"
          >
            <img src="/ok.png" alt="Ok Emote" />
            <span className="text-2xl font-semibold hidden md:block">
              Let’s Connect
            </span>
          </a>
        </div>
        <div className="relative w-full">
          <CustomDashedBorder
            bottom={{
              color: "#333",
              stripe: 12,
              spacing: 5,
              height: 1,
            }}
          />
        </div>
        <div className="max-w-[58rem] mx-auto space-y-8 px-8 md:px-20 py-6 md:py-10">
          <h1 className="font-semibold text-2xl md:text-3xl leading-tight">
            Hi I’m{" "}
            <img
              src="/peace.png"
              alt="Peace emote"
              className="inline h-10 -mt-3"
            />{" "}
            Kevin Lu. I’m currently a student at{" "}
            <span className="text-success underline decoration-wavy underline-offset-4">
              Bellarmine College Preparatory
            </span>
            . Starting off as a web developer, I’m now struggling with
            competitive programming.
          </h1>
          <h2 className="text-gray-600 font-semibold text-2xl md:text-3xl leading-tight">
            My current tech stack comprises of React, Next.js, Typescript, tRPC,
            and Prisma.
          </h2>
        </div>
        <div className="relative w-full">
          <CustomDashedBorder
            bottom={{
              color: "#333",
              stripe: 12,
              spacing: 5,
              height: 1,
            }}
          />
        </div>
        <div className="max-w-[58rem] mx-auto text-xl px-8 md:px-20 py-4">
          <div className="flex flex-col md:flex-row gap-0 md:gap-6">
            <figure className="w-full md:w-96 pb-8 flex-shrink-0">
              <img
                src="/kevin.jpg"
                alt="Kevin Dressed Up"
                className="w-full object-cover object-center h-[32rem] sm:h-[48rem] md:h-full rounded-lg"
              />
              <figcaption className="font-pen text-gray-500 text-2xl mt-2">
                The only “decent” picture I have lol
              </figcaption>
            </figure>
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-2">
                “ACHIEVEMENTS”
                <span className="font-pen text-[1.65rem]">-ish?</span>
              </h3>
              <ul className="font-medium space-y-2 text-lg md:text-xl">
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
              <p className="font-medium mt-6 text-lg md:text-xl">
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
                problem-solving skills, and on the side, I’ve been working on my
                Airtable alternative,{" "}
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
      <div className="w-full border-t border-gray-300 dotted-background py-24 font-medium text-lg overflow-y-auto min-h-screen">
        <div className="max-w-[58rem] px-8 md:px-20 mx-auto">
          <h3 className="select-none">
            <img src="/hype.png" alt="Hype Emote" className="inline mr-2" />
            My "
            <span className="decoration-wavy underline underline-offset-4">
              chaotic
            </span>
            " portfolio
          </h3>
          <Tabs.Root defaultValue="tab1">
            <Tabs.List className="mt-4">
              <Tabs.Trigger value="tab1" asChild>
                <button className="focus:outline-none ml-2 inline px-3 py-0.5 rounded-lg bg-gray-300 text-gray-600 radix-state-active:font-semibold radix-state-active:bg-cyan radix-state-active:text-gray-100">
                  side-projects
                </button>
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2" asChild>
                <button className="focus:outline-none inline px-3 py-0.5 rounded-lg bg-gray-300 text-gray-600 radix-state-active:font-semibold radix-state-active:bg-cyan radix-state-active:text-gray-100 ml-2">
                  blog
                </button>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <div className="mt-8 space-y-8">
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
            </Tabs.Content>
            <Tabs.Content value="tab2" className="mt-8">
              <ul className="space-y-4">
                {posts.map((post, idx) => (
                  <PostCard key={idx} {...post} />
                ))}
              </ul>
            </Tabs.Content>
          </Tabs.Root>
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
