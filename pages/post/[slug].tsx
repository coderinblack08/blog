import { format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import React from "react";
import { Navbar } from "../../components/Navbar";

const Post: NextPage<{
  slug: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: { [key: string]: any };
}> = ({ source, data }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-8 px-5">
        <h1 className="font-sans font-bold text-3xl">{data.title}</h1>
        <div className="flex items-center space-x-1.5 mt-2">
          <p className="text-gray-300 text-sm font-bold">{data.category}</p>{" "}
          <span>·</span>
          <time className="text-sm text-gray-400 dark:text-gray-300 inline-block">
            {data.date}
          </time>
        </div>
        <hr className="border-b border-gray-800 my-8" />
        <article className="prose max-w-3xl mt-6">
          <MDXRemote {...source} components={{}} />
        </article>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  return {
    paths: files.map((file) => ({
      params: { slug: file.replace(".mdx", "") },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
  const { content, data } = matter(markdown);

  data.date = format(new Date(data.date), "MMMM dd, yyyy");

  const source = await serialize(content, {
    mdxOptions: {
      // rehypePlugins: [require("rehype-katex")],
      remarkPlugins: [require("remark-math"), require("remark-html-katex")],
    },
  });

  return {
    props: { data, source, slug },
  };
};

export default Post;
