import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import Link from "next/link";
import { components } from "../lib/components";

const Post: NextPage<{
  source: MdxRemote.Source;
  data: { [key: string]: any };
}> = ({ source, data }) => {
  const content = hydrate(source, { components });

  return (
    <div className="max-w-prose mx-auto py-20">
      <time className="font-nanum text-sm text-gray-600 mb-2 inline-block">
        {data.date}
      </time>
      <h1 className="text-4xl mb-8">{data.title}</h1>
      <article className="prose">{content}</article>
      <Link href="/">
        <a className="inline-block text-lg text-yellow-500 hover:underline mt-5">
          Return Home
        </a>
      </Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  return {
    paths: files.map((file) => ({ params: { slug: file.replace(".md", "") } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { content, data } = matter(markdown);

  data.date = format(new Date(data.date), "MMMM dd, yyyy");

  const source = await renderToString(content, { components, scope: data });

  return {
    props: { data, source },
  };
};

export default Post;
