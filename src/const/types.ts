type ResponsiveImage = {
  aspectRatio: number;
  base64: string;
  height: number;
  sizes: string;
  src: string;
  srcSet: string;
  width: number;
  webpSrcSet: string;
  alt: string;
};

export type BlogPost = {
  publishedDate: string;
  title: string;
  slug: string;
  postHero: ResponsiveImage;
};
