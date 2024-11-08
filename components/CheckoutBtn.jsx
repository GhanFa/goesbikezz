import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutBtn = () => {
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await redirectToCheckout();
      if (res.error) alert(res.error.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const { redirectToCheckout } = useShoppingCart();
  return (
    <div>
      <button
        className="btn btn-accent w-full disabled:opacity-40"
        disabled={loading}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutBtn;
