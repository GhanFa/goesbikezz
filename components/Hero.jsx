import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero py-20 md:py-0 md:min-h-screen relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex gap-10">
          {/* text */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-6 uppercase">
              Where <span className="text-accent">Joyful</span> Cycling Begins
            </h1>
            <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
              Enjoy the thrill of cycling with the best bicycles designed for
              comfort and high performance! Now is the time to improve your
              healthy lifestyle with a premium quality bicycle that is ready to
              accompany your journey.
            </p>
            {/* btn group */}
            <div className="flex gap-4 mx-auto xl:mx-0">
              <Link href="/our-bikes" className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
              <Link href="/our-bikes" className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Bikes</button>
              </Link>
            </div>
          </div>

          {/* img */}
          <div className="hidden xl:flex">
            <Image
              src="/assets/hero/bike.png"
              alt=""
              width={860}
              height={480}
              quality={100}
              priority
              className="object-contain scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
