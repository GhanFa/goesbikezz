"use client";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCart = ({ text, btnStyles, icon, ...props }) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  const bike = {
    price_id: props.price_id,
    name: props.name,
    price: props.price,
    description: props.desc,
    images: props.images,
  };
  console.log("Bike to add:", bike);

  return (
    <button
      className={btnStyles}
      onClick={() => {
        addItem(bike);
        toast({
          title: `${bike.name} has been added to cart`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCart;
