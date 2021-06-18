import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePicture from "../public/profile-picture.png";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl px-5 mx-auto py-6">
      <Link href="/" passHref>
        <a className="flex items-center">
          <Image
            src={profilePicture}
            width={48}
            height={48}
            alt="Profile Picture"
            className="rounded-xl"
            placeholder="blur"
          />
        </a>
      </Link>
      <div className="flex items-center space-x-8">
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
        <button className="bg-yellow py-2 px-5 rounded-lg text-sm text-gray-900 font-bold">
          <span className="mr-2 text-sm">📫</span> Contact
        </button>
      </div>
    </div>
  );
};
