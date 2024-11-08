"use client";
import { useShoppingCart } from "use-shopping-cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import CartItem from "./CartItem";
import { ScrollArea } from "./ui/scroll-area";
import CheckoutBtn from "./CheckoutBtn";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
const CartSidebar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Cart({cartCount})
          </SheetTitle>
          <VisuallyHidden.Root>
            <SheetDescription>Description</SheetDescription>
          </VisuallyHidden.Root>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <h5 className="text-black/50">Cart is empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh]  pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  {
                    return <CartItem item={item} key={key} />;
                  }
                })}
            </ScrollArea>
          )}
        </>
        {cartCount > 0 && (
          <div>
            <div className="flex justify-between font-bold font-primary">
              <div className="uppercase mb-5">Total</div>
              <div>${totalPrice}</div>
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
