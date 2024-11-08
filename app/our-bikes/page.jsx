import { client } from "@/app/lib/sanity";
import BikeCategories from "@/components/BikeCategories";
import LoadingSpinner from "@/components/LoadingSpinner";

const OurBikes = async () => {
  // Mengambil data produk dari API
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

  let products;

  try {
    products = await client.fetch(query);
    console.log(products);
  } catch (error) {
    console.error("Error fetching product:", error);
    products = []; // Jika terjadi error, set produk menjadi array kosong
  }

  return (
    <div>
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <BikeCategories bikes={products} />
      )}
    </div>
  );
};

export default OurBikes;
