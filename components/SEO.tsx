import { BlogJsonLd, NextSeo } from "next-seo";
import { OpenGraphImages } from "next-seo/lib/types";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  date?: string;
  images?: OpenGraphImages[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  images,
  date,
  children,
}) => {
  const router = useRouter();
  const url = `https://coderinblack.now.sh${router.asPath}`;

  return (
    <>
      <BlogJsonLd
        title={title}
        description={description}
        url={url}
        images={[]}
        datePublished={date}
        dateModified={date}
        authorName="Coderinblack"
      />
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          images,
        }}
      />
      {children}
    </>
  );
};
