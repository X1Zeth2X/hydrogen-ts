import {useShopQuery, useShop} from '@shopify/hydrogen';
import {ServerComponentRequest} from '@shopify/hydrogen/dist/esnext/framework/Hydration/ServerComponentRequest.server';
import {ServerComponentResponse} from '@shopify/hydrogen/dist/esnext/framework/Hydration/ServerComponentResponse.server';
import {QUERY} from '../queries/siteMaps';
import {shopSitemap} from '../utils';
import {ShopSitemapData} from '../utils/ShopSitemap/types';

const MAX_URLS = 250; // the google limit is 50K, however, SF API only allow querying for 250 resources each time

interface SitemapProps {
  request: ServerComponentRequest;
  response: ServerComponentResponse;
}

const Sitemap: React.FC<SitemapProps> = ({request, response}) => {
  response.doNotStream();

  const {languageCode} = useShop();

  const {data} = useShopQuery<ShopSitemapData>({
    query: QUERY,
    variables: {
      language: languageCode,
      urlLimits: MAX_URLS,
    },
    // Cache the page for 24 hours
    cache: {maxAge: 60 * 60 * 24},
  });

  response.headers.set('content-type', 'application/xml');

  return response.send(shopSitemap(data, request.url));
};

export default Sitemap;
