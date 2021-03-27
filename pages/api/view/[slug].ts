import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../../lib/redis";

const view = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  const slugs = fs.readdirSync("posts");
  if (slugs.filter((file) => file.replace(".md", "") === slug).length > 0) {
    const key = `views:${slug}`;

    await redis.incr(key);
    return res.status(200).send("success");
  }
  return res.status(400).send({ error: "Article doesn't exist" });
};

export default view;
