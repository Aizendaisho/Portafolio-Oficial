import { Carousel } from "flowbite-react";
import React from "react";

export default function AboutMe() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10">
      <h3 className=" md:text-center text-start text-3xl font-bold uppercase m-4">
        About Me
      </h3>
      <Carousel slideInterval={10000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
