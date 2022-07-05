import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { GetStaticPaths, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

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
    },
  };
};

const PostLayout: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <div className="text-center mb-8">
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1>{post.title}</h1>
        </div>
        <div
          className="prose-lg max-w-4xl mx-auto px-5 w-full prose-p:tracking-tight prose-code:text-cyan prose-headings:text-[2rem] prose-headings:tracking-tight prose-headings:font-semibold prose-invert"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
};

export default PostLayout;
