import React from "react";
import BannerBG from "../../../public/hero/home-bg.png";
import groupImage from "../../../public/hero/group-image.png";
import Man1 from "../../../public/hero/man-img-1.png";
import Man2 from "../../../public/hero/man-img-2.png";
import Client1 from "../../../public/hero/client-img-1.png";
import Client2 from "../../../public/hero/client-img-2.png";
import Client3 from "../../../public/hero/client-img-3.png";
import SideImage1 from "../../../public/hero/side-image-1.png";
import arrowIcon from "../../../public/hero/arrow-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className=" relative">
      <div className=" absolute">
        <Image src={BannerBG} width={1920} height={890} alt="bg-iamge" />
      </div>
      <div className=" absolute w-full h-[890px] border-2">
        <div className=" container mx-auto h-full flex items-center justify-between ">
          <div className="left w-full pt-14">
            <h1 className=" text-[82px] font-bold leading-[88.5px]">
              Bring your business into creativity
            </h1>
            <p className=" w-[400px] py-6 mb-10">
              Incorporating a business offers benefits tax limited liability
              protection tax the
            </p>
            <Link
              href={"/"}
              className="px-8 py-4 bg-secondary-blue text-white text-[22px] rounded-lg"
            >
              Get Started
            </Link>
          </div>
          <div className="relative h-full w-full pt-20">
            <div className=" absolute top-[170px] right-0 flex justify-end">
              <Image
                src={groupImage}
                width={520}
                height={512}
                alt="Group Image"
              />
            </div>
            <Image
              className=" absolute top-[250px] left-60"
              width={65}
              height={65}
              src={Man1}
              alt="side Image"
            />
            <Image
              className=" absolute top-[330px] right-[-90px]"
              src={Man2}
              width={65}
              height={65}
              alt="side-image-2"
            />
            <div className=" absolute top-[450px] right-[-80px] flex gap-5 bg-white py-[10px] px-4 items-center rounded-xl">
              <div className=" flex h-14 -space-x-5 items-center">
                <Image src={Client1} width={55} height={55} alt="clients-1" />
                <Image src={Client2} width={55} height={55} alt="clients-2" />
                <Image src={Client3} width={55} height={55} alt="clients-3" />
              </div>
              <div>
                <p className=" text-[36px] font-bold text-primary">20K+</p>
                <p className="">Happy Clients</p>
              </div>
            </div>
            <Image
              className=" absolute bottom-16 -left-20"
              src={SideImage1}
              alt="side image-4"
              width={300}
              height={205}
            />
            <Image
              className=" absolute -right-28 bottom-44"
              src={arrowIcon}
              width={85}
              height={120}
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
