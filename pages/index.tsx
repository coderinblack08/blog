import { format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import { ViewCounter } from "../components/ViewCounter";

const Index: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <div className="max-w-prose mx-auto py-10 md:py-12 px-5">
      <div className="flex flex-col items-center">
        <div className="hidden md:block mb-8">
          <Image
            src="/hand.png"
            alt="Hand Illustration"
            width={1897 * 0.25}
            height={1017 * 0.25}
            quality={100}
            priority
          />
        </div>
        <h1 className="font-peachy font-extrabold text-4xl md:text-5xl text-center my-5">
          Aloha, I'm <span className="text-yellow-500">Kevin</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base text-center leading-relaxed">
          Developers are strange animals, aren't they? My favorite stack is
          Typescript, React, GraphQL (or REST), Postgres, and Redis. I might
          throw in Elixir or Golang soon 👀
        </p>
      </div>
      <div className="mt-20 space-y-8">
        {posts.map((post) => (
          <Link href="/[slug]" as={`/${post.slug}`} key={post.slug}>
            <a className="block">
              <div className="flex items-center space-x-3">
                <time className="text-sm text-gray-600 dark:text-gray-400">
                  {post.date}
                </time>
                <ViewCounter slug={post.slug} />
              </div>
              <h2 className="font-sans text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
                {post.description}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = fs.readdirSync("posts");
  const postData: any[] = fileNames.map((file) => {
    const { data } = matter(fs.readFileSync(path.join("posts", file), "utf-8"));
    data.date = format(new Date(data.date), "MMMM dd, yyyy");
    return { slug: file.replace(".md", ""), ...data };
  });

  return {
    props: {
      posts: postData.sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? 1 : -1
      ),
    },
  };
};

export default Index;
