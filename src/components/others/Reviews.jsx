import Image from "next/image";
import React from "react";
import QuetoIcon from "/public/review/queto.png";
import ReviewImage from "/public/review/review-image.png";

export default function Reviews() {
  return (
    <section className="pt-32 pb-[275px] bg-[#faf7f0]">
      <div className="container mx-auto flex items-center">
        <div className="w-full">
          <div className=" w-20 h-20 flex items-center justify-center bg-secondary-blue rounded-full">
            <Image
              src={QuetoIcon}
              width={38}
              height={42}
              className=" object-cover"
              alt="queto icon"
            />
          </div>
          <p className=" w-[566px] pt-8 text-2xl">
            Creative agency encompasses wide range of services related i the
            creative and st marketing These agencies specialize in offering
            innovative solutions to clients branding loren ipsum
          </p>
          <div className=" flex gap-5 pt-14">
            <div className=" w-14 h-[2px] bg-primary mt-3"></div>
            <div>
              <h4>Michael Ramirez</h4>
              <p>Marketing Manager</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src={ReviewImage}
            width={620}
            height={500}
            className=" object-cover"
            alt="Review Image"
          />
        </div>
      </div>
      <div></div>
    </section>
  );
}
