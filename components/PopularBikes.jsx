import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularCarousel from "./PopularCarousel";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)]{
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories":categories[]-> {
    name
  }
    }`;

  const data = await client.fetch(query);
  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center uppercase">Most Popular Bikes</h2>
        <p className="text-center mb-[30px] w-3/4 mx-auto">
          A high-quality bicycle has a lightweight, durable frame, smooth gears,
          and responsive brakes. It offers excellent comfort with ergonomic
          design, reliable suspension, and durable tires. Additional features
          like integrated lighting and easy maintenance make it an ideal choice
          for performance and comfort.
        </p>
        <PopularCarousel bikes={bikes} />
        <Link href="/our-bikes">
          <button className="btn btn-accent mx-auto">View All</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
