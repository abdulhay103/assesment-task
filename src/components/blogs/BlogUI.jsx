import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import BlogImage1 from "../../../public/blog/blog-image-1.png";
import BlogImage2 from "../../../public/blog/blog-image-2.png";
import BlogImage3 from "../../../public/blog/blog-image-3.png";

export default function BlogUI() {
  return (
    <section className=" py-20">
      <div className="container mx-auto">
        <div className=" w-full flex justify-between items-center">
          <h2 className=" w-[630px]">
            Crafting Brands That Stand Out from the Crowd
          </h2>
          <div className=" flex gap-6">
            <button className=" w-[60px] h-[60px] rounded-full bg-[#e5e5f8] flex justify-center items-center">
              <ArrowLeft size={16} className=" text-secondary-blue" />
            </button>
            <button className=" w-[60px] h-[60px] rounded-full bg-secondary-blue flex justify-center items-center">
              <ArrowRight size={16} className=" text-white" />
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-6">
          <div className=" col-span-1 border rounded-20">
            <div className=" relative">
              <Image
                src={BlogImage1}
                width={410}
                height={210}
                alt="Blog Image"
              />
              <p className=" bg-secondary-blue px-4 py-2 text-white inline">
                October 19, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
