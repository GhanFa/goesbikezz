"use client";
import { client } from "@/app/lib/sanity";
import BikeCategories from "@/components/BikeCategories";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";

// const getData = async () => {
//   // const query = `*[_type == 'product']{
//   //       _id,
//   //       name,
//   //       description,
//   //       images,
//   //       price,
//   //       price_id,
//   //       "slug":slug.current,
//   //       "categories": categories[]-> {
//   //         name
//   //       }
//   //   }`;
//   // const data = await client.fetch(query);
//   // return data;
// };

const OurBikes = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Tambahkan state loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `*[_type == 'product']{
          _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug":slug.current,
          "categories": categories[]-> {
            name
          }
      }`;

        const data = await client.fetch(query);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const bikes = product;

  return (
    <div>{loading ? <LoadingSpinner /> : <BikeCategories bikes={bikes} />}</div>
  );
};

export default OurBikes;
