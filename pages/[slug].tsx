import { format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import path from "path";
import React, { useEffect } from "react";
import { ViewCounter } from "../components/ViewCounter";
import { components } from "../lib/components";
import { SEO } from "../components/SEO";
import { BlogJsonLd } from "next-seo";

const Post: NextPage<{
  slug: string;
  source: MdxRemote.Source;
  data: { [key: string]: any };
}> = ({ slug, source, data }) => {
  const content = hydrate(source, { components });

  useEffect(() => {
    const viewCount = async () => {
      const res = await fetch(`/api/view/${slug}`, {
        method: "POST",
      });
    };
    viewCount();
  }, []);

  return (
    <SEO title={data.title} description={data.description} date={data.date}>
      <div className="max-w-prose mx-auto py-16 px-5">
        <div className="flex items-center space-x-3 mb-3">
          <time className="text-sm text-gray-600 dark:text-gray-300 inline-block">
            {data.date}
          </time>
          <ViewCounter slug={slug} />
        </div>
        <h1 className="font-sans font-bold text-4xl mb-8">{data.title}</h1>
        <article className="prose dark:prose-dark">{content}</article>
      </div>
    </SEO>
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
    props: { data, source, slug },
  };
};

export default Post;
