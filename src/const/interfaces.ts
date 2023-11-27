export type ResponsiveImage = {
  responsiveImage: {
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
};

export interface BlogPost {
  publishedDate: string;
  title: string;
  slug: string;
  postHero: ResponsiveImage;
  excerpt: string;
}
