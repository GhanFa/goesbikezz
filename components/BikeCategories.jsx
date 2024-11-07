"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { urlFor } from "@/app/lib/sanity";
import Bike from "./Bike";

const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState("All");
  const [filteredBikes, setFilteredBikes] = useState(bikes);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "All"
          ? bikes
          : bike.categories.find((cat) => cat.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });

    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  return (
    <section className="min-h-[1200px] py-10 relative">
      <div className="container mx-auto ">
        <div className="flex flex-col sm:flex-row">
          {/* sidebar */}
          <aside className=" w-full p-4 mb-8 md:w-[300px] xl:h-[38vh] xl:sticky xl:top-28">
            <RadioGroup
              defaultValue="All"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="All"
                  id="all"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Road"
                  id="road"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <Label htmlFor="road">Road</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Professional"
                  id="professional"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <Label htmlFor="professional">Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Extreme"
                  id="extreme"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <Label htmlFor="extreme">Extreme</Label>
              </div>
            </RadioGroup>
            {/* price Slider */}
            <div className="w-full">
              <div className="text-lg mb-4 font-medium">
                Max Price: <span className="text-accent ml-2">${price}</span>
                <span className="ml-2">
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items`
                    : filteredBikes.length === 0
                      ? `${filteredBikes.length} items`
                      : `${filteredBikes.length} item`}
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(value) => {
                  setPrice(value[0]);
                }}
              />
            </div>
          </aside>

          {/* bikes list */}
          <div className=" w-full xl:w-[1050px] mx-auto md:mx-0 xl:ml-auto">
            {/* card bikes */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] xl:grid-cols-3 gap-7">
              {filteredBikes.map((bike) => (
                <Bike bike={bike} key={bike._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
