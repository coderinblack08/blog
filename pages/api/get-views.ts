import { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../lib/redis";

const getViews = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send((await redis.get(`views:${req.query.slug}`)) ?? 0);
};

export default getViews;
