import {
  CollectionConnection,
  ProductConnection,
  PageConnection,
} from '@shopify/hydrogen/dist/esnext/storefront-api-types';

export type ShopSitemapData = {
  products: ProductConnection;
  collections: CollectionConnection;
  pages: PageConnection;
};

export type SitemapData = {
  url: string;
  lastMod: string;
  changeFreq: string;
  image?: {
    url?: string;
    title?: string;
    caption?: string;
  };
};
