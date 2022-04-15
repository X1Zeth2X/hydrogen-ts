import {flattenConnection} from '@shopify/hydrogen';
import {
  Collection,
  Product,
  Page,
} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import {ShopSitemapData, SitemapData} from './types';

const shopSitemap = (data: ShopSitemapData, baseUrl: string): string => {
  const productsData = flattenConnection<Product>(data.products).map(
    (product) => {
      const url = product.onlineStoreUrl
        ? product.onlineStoreUrl
        : `${baseUrl}/products/${product.handle}`;

      const finalObject: SitemapData = {
        url,
        lastMod: product.updatedAt,
        changeFreq: 'daily',
      };

      if (product.featuredImage.url) {
        finalObject.image = {
          url: product.featuredImage.url,
        };

        if (product.title) {
          finalObject.image.title = product.title;
        }

        if (product.featuredImage.altText) {
          finalObject.image.caption = product.featuredImage.altText;
        }

        return finalObject;
      }
    },
  );

  const collectionsData = flattenConnection<Collection>(data.collections).map(
    (collection) => {
      const url = collection.onlineStoreUrl
        ? collection.onlineStoreUrl
        : `${baseUrl}/collections/${collection.handle}`;

      return {
        url,
        lastMod: collection.updatedAt,
        changeFreq: 'daily',
      };
    },
  );

  const pagesData = flattenConnection<Page>(data.pages).map((page) => {
    const url = page.onlineStoreUrl
      ? page.onlineStoreUrl
      : `${baseUrl}/pages/${page.handle}`;

    return {
      url,
      lastMod: page.updatedAt,
      changeFreq: 'weekly',
    };
  });

  const urlsDatas: SitemapData[] = [
    ...productsData,
    ...collectionsData,
    ...pagesData,
  ];

  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${urlsDatas.map((url) => renderUrlTag(url)).join('')}
    </urlset>`;
};

const renderUrlTag = (url: SitemapData): string => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastMod}</lastmod>
    <changefreq>${url.changeFreq}</changefreq>
    ${
      url.image
        ? `
      <image:image>
        <image:loc>${url.image.url}</image:loc>
        <image:title>${url.image.title ?? ''}</image:title>
        <image:caption>${url.image.caption ?? ''}</image:caption>
      </image:image>
    `
        : ``
    }
  </url>
`;

export default shopSitemap;
