import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Bike = ({ bike }) => {
  const popularBikeCat = bike.categories.find(
    (bike) => bike.name === "Popular"
  );

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {popularBikeCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          <Image
            src={urlFor(bike.images[0]).url()}
            width={280}
            height={147}
            loading="lazy"
            alt={bike.name}
          />
        </div>
        {/* button group */}
        <div className=" absolute bottom-0 right-0 top-0 left-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCart
            price_id={bike.price_id}
            name={bike.name}
            currency="USD"
            desc={bike.description}
            images={bike.images}
            price={bike.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="mb-2 text-gray-500 font-semibold capitalize">
        {bike.categories[0].name} bike
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-accent">${bike.price}</div>
    </div>
  );
};

export default Bike;
