// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import chrome from "chrome-aws-lambda";

type Data = {
  name: string;
};

export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  // const browser = await puppeteer.launch({ headless: true });
  const browser = await puppeteer.launch(
    process.env.NODE_ENV === "production"
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        }
      : {}
  );

  const page = await browser.newPage();
  await page.goto(`https://${id}`);

  const imgList = await page.evaluate(() => {
    const nodeList = document.querySelectorAll("img");
    const nodeArray = [...(nodeList as any)];

    console.log("NODE", nodeList);

    const imglist = nodeArray.map(({ src }) => ({
      src,
    }));

    return imglist;
  });

  await browser.close();

  res.status(200).json(imgList as any);
}
