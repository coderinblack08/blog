import Head from "next/head";
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
    <article className="p-4">
      <h2>
        <Link href={post.url}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-gray-500">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </article>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1>Kevin Lu</h1>
      <p className="mb-8 mt-2 text-gray-500 text-lg">a literal dumbass</p>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
