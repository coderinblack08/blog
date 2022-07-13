import React from "react";
import { AiOutlineGithub, AiFillStar } from "react-icons/ai";
import useSWR from "swr";

interface ProjectCardProps {
  repo: string;
  description: string;
  url: string;
}

async function getRepoStarCount(repo: string): Promise<number> {
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  const json = await response.json();
  return json.stargazers_count;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  repo,
  description,
  url,
}) => {
  const { data: stars } = useSWR(repo, (key) =>
    getRepoStarCount(key).then((count) => count)
  );

  return (
    <div className="p-6 border border-gray-300 bg-gray-100 rounded-lg">
      <div className="flex items-center justify-between">
        <a
          href={`https://github.com/${repo}`}
          className="flex items-center space-x-2 font-medium text-xl hover:underline hover:underline-offset-4"
        >
          <AiOutlineGithub size={24} />
          <span>{repo.split("/").join(" / ")}</span>
        </a>
        <button className="px-3 py-0.5 flex items-center space-x-2 rounded-md bg-gray-300">
          <AiFillStar size={16} />
          <span>{stars}</span>
        </button>
      </div>
      <p className="my-4 text-gray-500">{description}</p>
      <a href={url} className="text-cyan font-semibold">
        {url.replace("https://", "")}
      </a>
    </div>
  );
};
