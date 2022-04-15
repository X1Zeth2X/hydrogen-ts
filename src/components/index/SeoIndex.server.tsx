import { CacheDays, Seo, useShopQuery } from "@shopify/hydrogen";
import { SEO_QUERY } from "../../queries/indexContent";

const SeoIndex: React.FC = () => {
  const {
    data: {
      shop: {title, description},
    },
  } = useShopQuery({
    query: SEO_QUERY,
    cache: CacheDays(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title,
        description,
      }}
    />
  );
}

export default SeoIndex;