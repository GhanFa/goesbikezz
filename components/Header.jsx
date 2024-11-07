"use client";

import Link from "next/link";
import Nav from "./Nav";
import { CgShoppingBag } from "react-icons/cg";
import CartSidebar from "./CartSidebar";
import { useShoppingCart } from "use-shopping-cart";
const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:text-current">
          <h1 className="text-[26px]">
            <span className=" text-accent">G</span>oes
            <span className=" text-accent">B</span>ikezz
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex gap-[16px] sm:gap-[36px]" />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className="bg-accent h-[15px] w-[15px] absolute rounded-full -top-1 -right-1 text-white flex items-center justify-center text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
