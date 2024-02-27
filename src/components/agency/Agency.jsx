import React from "react";
import DashboardImage1 from "/public/agency/dashboard-image-1.jpg";
import DashboardImage2 from "/public/agency/dashboard-image-2.jpg";
import DashboardImage3 from "/public/agency/dashboard-image-3.jpg";
import DashboardImage4 from "/public/agency/dashboard-image-4.jpg";
import DashboardImage5 from "/public/agency/dashboard-image-5.jpg";
import Image from "next/image";

export default function Agency() {
  return (
    <section className=" py-32">
      <div className="container mx-auto">
        <h2 className=" w-[630px] text-center font-bold mx-auto ">
          Where Imagination Meets the agency Innovation
        </h2>
        <div className="grid grid-cols-3 gap-7 pt-16">
          <div className=" col-span-1 bg-[#efeafc] p-10 rounded-20">
            <div className=" w-full flex justify-center">
              <Image
                src={DashboardImage1}
                width={220}
                height={248}
                alt="Dashboard Image"
                className=" rounded-[14px] overflow-hidden"
              />
            </div>
            <div className=" pt-6">
              <h4 className="">Content and Copywriting</h4>
              <p>non similique voluptatem</p>
            </div>
          </div>
          <div className=" col-span-1 bg-[#eaf7fc] p-10 rounded-20">
            <div className=" w-full flex justify-center">
              <Image
                src={DashboardImage2}
                width={220}
                height={248}
                alt="Dashboard Image"
                className=" rounded-[14px] overflow-hidden"
              />
            </div>
            <div className=" pt-6">
              <h4 className="">Content and Copywriting</h4>
              <p>consequatur excepturi magnam</p>
            </div>
          </div>
          <div className=" col-span-1 bg-[#fefae9] p-10 rounded-20">
            <div className=" w-full flex justify-center">
              <Image
                src={DashboardImage3}
                width={220}
                height={248}
                alt="Dashboard Image"
                className=" rounded-[14px] overflow-hidden"
              />
            </div>
            <div className=" pt-6">
              <h4 className="">Social Media Strategy</h4>
              <p>voluptatem numquam qui</p>
            </div>
          </div>
          <div className=" col-span-1 bg-[#eafcea] p-10 rounded-20">
            <div className=" w-full flex justify-center">
              <Image
                src={DashboardImage4}
                width={220}
                height={248}
                alt="Dashboard Image"
                className=" rounded-[14px] overflow-hidden"
              />
            </div>
            <div className=" pt-6">
              <h4 className="">Social Media Strategy</h4>
              <p>odit quidem corporis</p>
            </div>
          </div>
          <div className=" col-span-2 bg-[#feede9] p-10 rounded-20">
            <div className=" w-full flex justify-center">
              <Image
                src={DashboardImage5}
                width={664}
                height={160}
                alt="Dashboard Image"
                className=" rounded-[14px] overflow-hidden"
              />
            </div>
            <div className=" pt-6">
              <h4 className="">Brand Identity and Logo Design</h4>
              <p>non ipsam voluptas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
