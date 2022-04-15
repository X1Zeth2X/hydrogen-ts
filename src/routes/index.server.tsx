import {Suspense} from 'react';
import {Country, CountryCode} from '@shopify/hydrogen/dist/esnext/storefront-api-types';

import Layout from '../components/Layout.server';
import Welcome from '../components/Welcome.server';

import FeaturedProductsBox from '../components/index/FeaturedProductsBox.server';
import SeoIndex from '../components/index/SeoIndex.server';
import GradientBackground from '../components/index/GradientBackground';
import FeaturedCollectionBox from '../components/index/FeaturedCollectionBox.server';

interface IndexPageProps {
  country: Country;
}

const Index: React.FC<IndexPageProps> = ({ country = { isoCode: CountryCode.Us } as Country }) => {
  return (
    <Layout hero={<GradientBackground />}>
      <Suspense fallback={null}>
        <SeoIndex />
      </Suspense>
      <div className="relative mb-12">
        <Welcome />
        <Suspense fallback={<BoxFallback />}>
          <FeaturedProductsBox country={country} />
        </Suspense>
        <Suspense fallback={<BoxFallback />}>
          <FeaturedCollectionBox country={country} />
        </Suspense>
      </div>
    </Layout>
  )
}

const BoxFallback: React.FC = () => (<div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>);

export default Index;
