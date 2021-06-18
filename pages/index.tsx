import React from "react";
import Link from "next/link";
import profilePicture from "../public/profile-picture.png";
import Image from "next/image";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

const Home: React.FC<{ posts: { [key: string]: any }[] }> = ({ posts }) => {
  return (
    <div>
      <div className="max-w-3xl mx-auto py-12 px-5">
        <Image
          src={profilePicture}
          width={48}
          height={48}
          alt="Profile Picture"
          className="rounded-xl"
          placeholder="blur"
        />
        <header className="my-8">
          <p className="text-yellow text-sm mb-1">Hello Guys, I&apos;m</p>
          <h1 className="font-bold text-3xl">Kevin LooHoo</h1>
          <p className="text-gray-400 mt-2">
            Software developer and designer; Interested in competitive and
            abstract mathematics.
          </p>
          <div className="flex items-center space-x-8 mt-6">
            <button className="bg-yellow py-2 px-5 rounded-lg text-sm text-gray-900 font-bold">
              <span className="mr-2 text-sm">📫</span> Contact
            </button>
            <a
              href="https://github.com/coderinblack08"
              className="text-gray-300 font-bold text-sm"
            >
              Github
            </a>
            <a
              href="https://twitter.com/coderinblack"
              className="text-gray-300 font-bold text-sm"
            >
              Twitter
            </a>
          </div>
        </header>
        <main>
          {posts.map((post) => (
            <Link href="/[slug]" as={`/${post.slug}`} key={post.slug} passHref>
              <a className="block py-8 border-t border-gray-700/50">
                <div className="flex space-x-12">
                  <p className="text-gray-300">
                    <span className="font-bold text-gray-100">
                      {post.category}
                    </span>{" "}
                    · {format(new Date(post.date), "MMMM, dd")}
                  </p>
                  <div>
                    <h2 className="text-lg font-bold">{post.title}</h2>
                    <p className="text-gray-500 mt-1">{post.description}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = fs.readdirSync("posts");
  const postData: any[] = fileNames.map((file) => {
    const { data } = matter(fs.readFileSync(path.join("posts", file), "utf-8"));
    data.date = format(new Date(data.date), "MMMM dd, yyyy");
    return { slug: file.replace(".mdx", ""), ...data };
  });

  return {
    props: {
      posts: postData.sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? 1 : -1
      ),
    },
  };
};

export default Home;
