import Image from "next/image";
import React from "react";
import AboutHeaderBG from "/public/about/2/about-header-bg.png";
import SEO from "/public/about/2/seo.png";
import Project from "/public/about/2/project.png";
import Client from "/public/about/2/Clients.png";
import Landscape from "/public/about/2/Landscape-UIUX.png";
import Wifi from "/public/about/2/wifi.png";
import Task from "/public/about/2/task.png";

export default function About2() {
  return (
    <section className=" -mt-32">
      <div className="container mx-auto">
        <div className=" relative w-full h-[260px]">
          <Image
            src={AboutHeaderBG}
            width={1290}
            height={260}
            className=" absolute object-cover bg-[#95D5EE] rounded-20"
            alt="About Heade Bg"
          />
          <div className=" absolute top-20 w-full flex justify-around">
            <div className="  flex gap-6 items-center">
              <div className=" w-[100px] h-[100px] bg-[#FAF7F0] flex justify-center items-center rounded-20">
                <Image
                  src={SEO}
                  width={65}
                  height={65}
                  className=" object-cover"
                  alt="Icons"
                />
              </div>
              <div className="">
                <p className=" text-primary">Winning award</p>
                <h2 className="pt-2">200+</h2>
              </div>
            </div>
            <div className=" flex gap-6 items-center">
              <div className=" w-[100px] h-[100px] bg-[#FAF7F0] flex justify-center items-center rounded-20">
                <Image
                  src={Project}
                  width={65}
                  height={65}
                  className=" object-cover"
                  alt="Icons"
                />
              </div>
              <div className="">
                <p className=" text-primary">Total Projects</p>
                <h2 className="pt-2">650+</h2>
              </div>
            </div>
            <div className="  flex gap-6 items-center">
              <div className=" w-[100px] h-[100px] bg-[#FAF7F0] flex justify-center items-center rounded-20">
                <Image
                  src={Client}
                  width={65}
                  height={65}
                  className=" object-cover"
                  alt="Icons"
                />
              </div>
              <div className="">
                <p className=" text-primary">Happy Clients</p>
                <h2 className="pt-2">120+</h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-20 flex justify-between items-center">
          <Image src={Landscape} width={500} height={500} alt="Ui image" />
          <div className=" w-[570px]">
            <h2>We develop product that the people love to use</h2>
            <p className=" pt-6">
              Creative agency encompasses a wide an services related to creative
              and strategic marketing These age specialize in offering
              innovative solutions to clients branding and communication needs
              loren ipsum
            </p>
            <div className=" flex gap-6 pt-7 ">
              <div className=" w-16 h-16 bg-secondary-blue flex justify-center items-center rounded-full">
                <Image
                  src={Wifi}
                  width={30}
                  height={30}
                  className=" object-cover"
                  alt="Icons"
                />
              </div>
              <div className=" w-[488px]">
                <h4>Content Wizards</h4>
                <p>
                  Creative agency encompasses a wide range of services related
                  to creative and strategic marketing{" "}
                </p>
              </div>
            </div>
            <div className=" flex gap-6 pt-7">
              <div className=" w-16 h-16 bg-secondary-blue flex justify-center items-center rounded-full">
                <Image
                  src={Task}
                  width={30}
                  height={30}
                  className=" object-cover"
                  alt="Icons"
                />
              </div>
              <div className=" w-[488px]">
                <h4>Idea Makers</h4>
                <p>
                  Creative agency encompasses a wide range of services related
                  to creative and strategic marketing{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
