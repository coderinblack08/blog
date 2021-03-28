import { DefaultSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <DefaultSeo
        title="Coderinblack"
        description="My slice of the internet 🍰"
        canonical={`https://coderinblack.now.sh/${router.asPath}`}
        openGraph={{
          url: `https://coderinblack.now.sh/${router.asPath}`,
          title: "Coderinblack",
          description: "My slice of the internet 🍰",
          site_name: "Coderinblack",
          images: [
            {
              url: "https://coderinblack.now.sh/hand.png",
              width: 1897 * 0.1,
              height: 1017 * 0.1,
              alt: "Building Stuff",
            },
          ],
        }}
        twitter={{
          handle: "@coderinblack",
          cardType: "summary_large_image",
        }}
      />
      <div id="content">{children}</div>
    </>
  );
};
