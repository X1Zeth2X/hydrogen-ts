import {Suspense} from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {ImportGlobEagerOutput} from '@shopify/hydrogen/dist/esnext/types';

import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import LoadingFallback from './components/LoadingFallback';
import CartProvider from './components/CartProvider.client';

interface AppProps {
  routes: ImportGlobEagerOutput;
}

const App: React.FC<AppProps> = ({routes}) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <DefaultSeo />
          <Router>
            <FileRoutes routes={routes} />
            <Route path="*" page={<NotFound />} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
};

const routes: ImportGlobEagerOutput = import.meta.globEager(
  './routes/**/*.server.[jt](s|sx)',
);

export default renderHydrogen(App, {shopifyConfig, routes});
