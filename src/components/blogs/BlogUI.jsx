"use client";
import {
  ArrowLeft,
  ArrowRight,
  ChatsCircle,
  User,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useEffect } from "react";
import BlogImage1 from "../../../public/blog/blog-image-1.png";
import BlogImage2 from "../../../public/blog/blog-image-2.png";
import BlogImage3 from "../../../public/blog/blog-image-3.png";
import Link from "next/link";

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
        <div className=" grid grid-cols-3 gap-7 pt-10">
          <div className=" col-span-1 rounded-20 overflow-hidden shadow-lg border-b-2 border-transparent hover:border-blue-300 transition-all duration-300 ">
            <div className=" w-full h-52 relative">
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <Image
                  src={BlogImage1}
                  width={410}
                  height={210}
                  alt="Blog Image"
                  className=" object-cover"
                />
              </div>
              <p className=" absolute bottom-0 left-0 bg-secondary-blue px-4 py-2 text-white inline">
                October 19, 2022
              </p>
            </div>
            <div className=" py-4 px-6">
              <div className=" flex justify-between">
                <div className=" flex gap-2 items-center">
                  <User size={16} />
                  <p>By admin</p>
                </div>
                <div className=" flex gap-2 items-center">
                  <ChatsCircle size={16} />
                  <p>
                    Comments <span>(05)</span>
                  </p>
                </div>
              </div>

              <h4 className=" py-5">
                Creativity Unleashed the a Success Attained
              </h4>

              <Link href="#" className=" flex gap-2 items-center py-2">
                <p> Read More</p>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className=" col-span-1 rounded-20 overflow-hidden shadow-lg border-b-2 border-transparent hover:border-blue-300 transition-all duration-300 ">
            <div className=" w-full h-52 relative">
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <Image
                  src={BlogImage2}
                  width={410}
                  height={210}
                  alt="Blog Image"
                  className=" object-cover"
                />
              </div>
              <p className=" absolute bottom-0 left-0 bg-secondary-blue px-4 py-2 text-white inline">
                October 19, 2022
              </p>
            </div>
            <div className=" py-4 px-6">
              <div className=" flex justify-between">
                <div className=" flex gap-2 items-center">
                  <User size={16} />
                  <p>By admin</p>
                </div>
                <div className=" flex gap-2 items-center">
                  <ChatsCircle size={16} />
                  <p>
                    Comments <span>(05)</span>
                  </p>
                </div>
              </div>

              <h4 className=" py-5">
                Creativity Unleashed the a Success Attained
              </h4>

              <Link href="#" className=" flex gap-2 items-center py-2">
                <p> Read More</p>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className=" col-span-1 rounded-20 overflow-hidden shadow-lg border-b-2 border-transparent hover:border-blue-300 transition-all duration-300 ">
            <div className=" w-full h-52 relative">
              <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
                <Image
                  src={BlogImage3}
                  width={410}
                  height={210}
                  alt="Blog Image"
                  className=" object-cover"
                />
              </div>
              <p className=" absolute bottom-0 left-0 bg-secondary-blue px-4 py-2 text-white inline">
                October 19, 2022
              </p>
            </div>
            <div className=" py-4 px-6">
              <div className=" flex justify-between">
                <div className=" flex gap-2 items-center">
                  <User size={16} />
                  <p>By admin</p>
                </div>
                <div className=" flex gap-2 items-center">
                  <ChatsCircle size={16} />
                  <p>
                    Comments <span>(05)</span>
                  </p>
                </div>
              </div>

              <h4 className=" py-5">
                Creativity Unleashed the a Success Attained
              </h4>

              <Link href="#" className=" flex gap-2 items-center py-2">
                <p> Read More</p>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
