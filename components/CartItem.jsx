import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useShoppingCart } from "use-shopping-cart";

const CartItem = (item) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex justify-between items-center w-full h-[120px] mb-4 border-b">
      <div className="w-[110px] h-[110px] relative ">
        {/* image */}
        <Image
          src={urlFor(item.item.images[0]).url()}
          fill
          sizes="(max-width:110px) 110px 110px"
          priority
          className="object-contain"
          alt={item.item.name}
        ></Image>
      </div>
      {/* text */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex justify-between items-center">
          <h5>{item.item.name}</h5>
          <button onClick={() => removeItem(item.item.id)}>
            <FaX className="text-sm" />
          </button>
        </div>
        {/* increment, decrement item price */}
        <div className="flex justify-between items-center font-semibold">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.item.id)}>
              <FaMinus className="text-sm" />
            </button>
            <div>{item.item.quantity}</div>
            <button onClick={() => incrementItem(item.item.id)}>
              <FaPlus className="text-sm" />
            </button>
          </div>
          <div>${item.item.price * item.item.quantity}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full"></div>
    </div>
  );
};

export default CartItem;
