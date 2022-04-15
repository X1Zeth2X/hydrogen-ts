import {useCallback} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';

import CartUIProvider, {useCartUI} from './CartUIProvider.client';

/**
 * A client component that creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks
 */
const CartProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <CartUIProvider>
      <Provider>{children}</Provider>
    </CartUIProvider>
  );
};

const Provider: React.FC<{
  children: React.ReactNode;
  numCartLines?: number;
}> = ({children, numCartLines}) => {
  const {openCart} = useCartUI();
  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <>
      <ShopifyCartProvider
        numCartLines={numCartLines}
        onLineAdd={open}
        onCreate={open}
      >
        {children}
      </ShopifyCartProvider>
    </>
  );
};

export default CartProvider;
