import { flattenConnection, useShop, useShopQuery } from "@shopify/hydrogen";
import { Country, Product } from "@shopify/hydrogen/dist/esnext/storefront-api-types";
import { QUERY } from "../../queries/indexContent";
import FeaturedCollection from '../FeaturedCollection';

const FeaturedCollectionBox: React.FC<{ country: Country }> = ({country}) => {
  const {languageCode} = useShop();
  const {data} = useShopQuery<Product>({
    query: QUERY,
    variables: {
      country: country.isoCode,
      language: languageCode,
    },
    preload: true,
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const featuredCollection =
    collections && collections.length > 1 ? collections[1] : collections[0];

  return <FeaturedCollection collection={featuredCollection} />;
}

export default FeaturedCollectionBox;