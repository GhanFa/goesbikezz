"use client";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCart from "../../../components/AddToCart";
import Link from "next/link";
import {
  bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
  Bike,
} from "lucide-react";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

// const getData = async (slug) => {
//   const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
//   _id,
//   images,
//   price,
//   price_id,
//   name,
//   description,
//   "slug": slug.current,
//   "categories": categories[]-> {name}
//   }`;
//   const data = await client.fetch(query);
//   return data;
// };

const ProductDetails = ({ params }) => {
  const [detailProduct, setDetailProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Tambahkan state loading
  const slug = params.slug;

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
          _id,
          images,
          price,
          price_id,
          name,
          description,
          "slug": slug.current,
          "categories": categories[]-> {name}
        }`;

        const data = await client.fetch(query);
        console.log(data);
        setDetailProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <LoadingSpinner />;
  if (!detailProduct) return <div>Product not found."</div>;

  // const bike = await getData(params.slug);
  const bike = detailProduct;
  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(bike.images[0]).url()}
              width={473}
              height={290}
              priority
              alt={bike.name}
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to Home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{bike.name}</h3>
                <p className="text-lg font-semibold">${bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCart
                price_id={bike.price_id}
                name={bike.name}
                currency="USD"
                desc={bike.description}
                images={bike.images}
                price={bike.price}
                text="Add to cart"
                btnStyles="btn btn-accent"
              />
            </div>
            {/* info */}
            <div className=" flex flex-col gap-4">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p className="ml-2">Free Shipping</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p className="ml-2">Free Return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Bike size={20} className="text-accent" />
                <p className="ml-2">
                  The bicycles are partially assembled and benefit from
                  transport insurance
                </p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p className="ml-2">Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
