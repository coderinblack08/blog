/* eslint-disable @next/next/no-img-element */
import { useMDXComponent } from "next-contentlayer/hooks";
import { BsFolder2 } from "react-icons/bs";
import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { GetStaticPaths, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

function stringToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  );
  return {
    props: {
      post,
      headings: getHeadings(post?.body.raw || ""),
    },
  };
};

export function getHeadings(source: string) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^##*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw.replace(/^##*\s/, "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 2) === "##" ? 2 : 1;

    return { text, level };
  });
}

const CustomLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const PostLayout: NextPage<{
  post: Post;
  headings: {
    text: string;
    level: number;
  }[];
}> = ({ post, headings }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="w-full max-w-5xl mx-auto">
        <div className="px-8 pt-20">
          <Link href="/">
            <a className="text-success">Go Back</a>
          </Link>
          <span className="mx-2 text-gray-500">·</span>
          <time dateTime={post.date} className="text-gray-500">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <span className="mx-2 text-gray-500">·</span>
          <span className="text-gray-500">{post.readingTime}</span>
          <h1 className="tracking-tight leading-relaxed text-4xl font-semibold mt-2">
            {post.title}
          </h1>
          <div className="flex items-center space-x-2 mt-2">
            <BsFolder2 size={20} />
            <p className="text-lg">
              {post.group[0].toUpperCase() + post.group.slice(1)}
            </p>
          </div>
        </div>
        <main className="px-8 mt-8 pb-20">
          <div className="border border-gray-300 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold tracking-tight mb-1">
              Table of contents
            </h2>
            <ol className="list-inside list-disc marker:text-gray-400 space-y-1">
              {headings.map((heading, index) => (
                <li
                  className={`${heading.level === 2 ? "pl-8" : ""} text-lg `}
                  key={index}
                >
                  <a
                    className="hover:underline"
                    href={`#${stringToSlug(heading.text)}`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="prose-lg prose-a:text-success w-full prose-p:tracking-tight prose-code:text-cyan prose-headings:text-[2rem] prose-headings:tracking-tight prose-headings:font-semibold prose-invert">
            <Component components={{ a: CustomLink }} />
          </div>
        </main>
      </article>
    </>
  );
};

export default PostLayout;
