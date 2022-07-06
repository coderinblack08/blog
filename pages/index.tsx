import Head from "next/head";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

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
  return (
    <div className="mx-auto max-w-2xl py-20 px-8">
      <Head>
        <title>Kevin Lu</title>
      </Head>

      <div className="flex items-center justify-between mb-2">
        <h1 className="inline tracking-tight leading-relaxed text-4xl font-semibold">
          Kevin Lu
        </h1>
        <div className="flex items-center space-x-3">
          <a href="https://github.com/coderinblack08">
            <AiOutlineGithub size={24} />
          </a>
          <a href="https://twitter.com/coderinblack">
            <AiOutlineTwitter size={24} />
          </a>
        </div>
      </div>

      <ul className="space-y-2">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </ul>
    </div>
  );
}
