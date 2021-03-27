import { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../../lib/redis";

const view = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const key = `views:${slug}`;
  await redis.incr(key);
  return res.status(200).send("success");
};

export default view;
