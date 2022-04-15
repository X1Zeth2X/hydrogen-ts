import { Link } from '@shopify/hydrogen';
import ProductCard from '../ProductCard';
import { flattenConnection, useShop, useShopQuery } from "@shopify/hydrogen";
import { Collection, Country, Product } from "@shopify/hydrogen/dist/esnext/storefront-api-types";
import {QUERY} from "../../queries/indexContent";

const FeaturedProductsBox: React.FC<{country: Country}> = ({ country }) => {
  const {languageCode} = useShop();
  const {data} = useShopQuery<Product>({
    query: QUERY,
    variables: {
      countryCode: country.isoCode,
      languageCode,
    },
    preload: true,
  });

  const collections = data ? flattenConnection<Collection>(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection.products
    ? flattenConnection(featuredProductsCollection.products)
    : null;

    return (
    <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
      {featuredProductsCollection ? (
        <>
          <div className="flex justify-between items-center mb-8 text-md font-medium">
            <span className="text-black uppercase">
              {featuredProductsCollection.title}
            </span>
            <span className="hidden md:inline-flex">
              <Link
                to={`/collections/${featuredProductsCollection.handle}`}
                className="text-blue-600 hover:underline"
              >
                Shop all
              </Link>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts && featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product as Product} />
              </div>
            ))}
          </div>
          <div className="md:hidden text-center">
            <Link
              to={`/collections/${featuredProductsCollection.handle}`}
              className="text-blue-600"
            >
              Shop all
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default FeaturedProductsBox;