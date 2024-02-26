import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/about/about-image.png";
import GroupImage from "../../../public/about/group-people.png";
import Code from "../../../public/about/code.png";

export default function About() {
  return (
    <section className=" pt-36">
      <div className="container flex mx-auto">
        <div className=" w-full relative h-[470px]">
          <Image
            className=" absolute"
            src={AboutImage}
            width={610}
            height={470}
            alt="about-image"
          />
          <div className=" absolute bottom-6 right-8 flex gap-6 items-center p-5 bg-white shadow rounded-lg">
            <div className=" w-20 h-20 flex justify-center items-center bg-[#95D5EE] rounded-full">
              <Image
                src={GroupImage}
                width={45}
                height={30}
                alt="group Image"
              />
            </div>
            <div>
              <h4>5,000+</h4>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-end">
          <div className=" w-[530px] ">
            <h2>Unleash Your Brands Creative Potential the agency</h2>
            <p className="py-10">
              Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus
              volutpat, sodales purus. Nunc quis maurodales purus. Nunc quis
              mauris et eros vulputate mattis Nulla vitae ex nunc.
            </p>
            <div className=" ml-10 relative w-[350px] h-[105px] bg-white border rounded-[20px]">
              <div className=" absolute top-5 -left-8 flex w-96">
                <div className=" w-16 h-16 rounded-full bg-secondary-blue flex justify-center items-center">
                  <Image src={Code} width={30} height={30} alt="Icons" />
                </div>
                <div className=" flex gap-5 items-center pl-6">
                  <h2 className=" inline">20+</h2>
                  <h5>Winning award</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
