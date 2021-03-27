import React from "react";
import useSWR from "swr";
import format from "comma-number";

interface ViewCounterProps {
  slug: string;
}

export const ViewCounter: React.FC<ViewCounterProps> = ({ slug }) => {
  const { isValidating, data: views } = useSWR(
    `/api/get-views?slug=${slug}`,
    (url) => fetch(url).then((r) => r.json())
  );

  return (
    <span className="text-sm">
      {isValidating ? "–––" : format(views)} {views === 1 ? "view" : "views"}
    </span>
  );
};
