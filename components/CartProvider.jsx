"use client";
import { CartProvider as Cprovider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <Cprovider
      mode="payment"
      cartMode="client-only"
      stripe=""
      successUrl="Succes"
      cancelUrl="error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </Cprovider>
  );
};

export default CartProvider;
