// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

type Data = {
  name: string;
};

export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = {
    name: "John Doe",
    data: { name: "test 2" },
  };

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://${id}`);

  const imgList = await page.evaluate(() => {
    const nodeList = document.querySelectorAll("img");
    const nodeArray = [...nodeList];

    console.log("NODE", nodeList);

    const imglist = nodeArray.map(({ src }) => ({
      src,
    }));

    return imglist;
  });

  await browser.close();

  res.status(200).json(imgList);
}
