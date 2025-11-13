import React from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brands
        <br /> and agencies to create <br /> impactful results
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center ">
        <div>
          <ServiceCard
          icon="/images/s1.webp"
          name="Cool web designs"
          description="Designing interfaces that are intuitive,efficent, and enjoyable to use."/>
        </div>
        <div>
          <ServiceCard
          icon="/images/s2.webp"
          name="Mobile development"
          description="Webs and apps to be displayed in all kind of devices."/>
        </div>
        <div >
          <ServiceCard
          icon="/images/s3.webp"
          name="SEO mindset"
          description="Thinking to reach the maximum number of users for the bussiness."/>
        </div>
        <div>
          <ServiceCard
          icon="/images/s4.webp"
          name="Programmed to you"
          description="Handmade implementations build side by side with the client."/>
        </div>
      </div>
    </div>
  );
};

export default Services;
