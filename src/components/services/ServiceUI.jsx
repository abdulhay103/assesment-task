import React from "react";
import Image from "next/image";
import Cloud from "../../../public/services/CLOUD.png";
import Pixel from "../../../public/services/pixel.png";
import Note from "../../../public/services/note.png";
import Forge from "../../../public/services/forge.png";
import Hub from "../../../public/services/hub.png";

export default function ServiceUI() {
  return (
    <section className=" py-24">
      <div className="container mx-auto">
        <h2 className=" w-[650px] text-center mx-auto">
          Simplify your business with the Saas
          <Image
            className=" inline mx-5"
            src={Cloud}
            width={65}
            height={65}
            alt="cloud"
          />
          services
        </h2>
        <div className=" grid grid-cols-2 gap-10 pt-16 pb-10">
          <div className=" flex gap-8 p-10 items-center bg-[#e7f7fd] rounded-[20px]">
            <div className=" flex items-center justify-center w-20 h-20 bg-[#95D5EE] rounded-full">
              <Image
                src={Pixel}
                alt="Service-image-1"
                className=" object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className=" w-96">
              <h4 className=" pb-4">Creative Pixel</h4>
              <p>
                Creative agency encom a wide the range of services related to
                creative
              </p>
            </div>
          </div>
          <div className=" flex gap-8 p-10 items-center bg-[#FAF7F0] rounded-[20px]">
            <div className=" flex items-center justify-center w-20 h-20 bg-[#F9A78F] rounded-full">
              <Image
                src={Note}
                alt="Service-image-2"
                className=" object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className=" w-96">
              <h4 className=" pb-4">Artistic Wave</h4>
              <p>
                Creative agency encom a wide the range of services related to
                creative
              </p>
            </div>
          </div>
          <div className=" flex gap-8 p-10 items-center bg-[#FAF7F0] rounded-[20px]">
            <div className=" flex items-center justify-center w-20 h-20 bg-[#F9A78F] rounded-full">
              <Image
                src={Forge}
                alt="Service-image-3"
                className=" object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className=" w-96">
              <h4 className=" pb-4">Design Forge</h4>
              <p>
                Creative agency encom a wide the range of services related to
                creative
              </p>
            </div>
          </div>
          <div className=" flex gap-8 p-10 items-center bg-[#e7f7fd] rounded-[20px]">
            <div className=" flex items-center justify-center w-20 h-20 bg-[#95D5EE] rounded-full">
              <Image
                src={Hub}
                alt="Service-image-4"
                className=" object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className=" w-96">
              <h4 className=" pb-4">Innovation Hub</h4>
              <p>
                Creative agency encom a wide the range of services related to
                creative
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
