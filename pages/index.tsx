import { GetStaticProps, NextPage } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
import Link from "next/link";

const Index: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <div className="max-w-prose mx-auto py-10 md:py-20 px-5">
      <h1 className="font-peachy text-5xl text-center my-5">
        Aloha, I'm <span className="font-peachy text-yellow-500">Kevin</span>
      </h1>
      <p className="font-nanum text-gray-800 dark:text-gray-300 text-center leading-relaxed">
        Developers are strange animals, aren't they? My favorite stack is
        Typescript, React, GraphQL (or REST), Postgres, and Redis. I might throw
        in Elixir or Golang soon 👀
      </p>
      <div className="mt-20 space-y-8">
        {posts.map((post) => (
          <Link href="/[slug]" as={`/${post.slug}`}>
            <a className="block">
              <time className="font-nanum text-sm text-gray-600 dark:text-gray-400">
                {post.date}
              </time>
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
