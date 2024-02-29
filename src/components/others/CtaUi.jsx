import Image from "next/image";
import React from "react";
import CtaImage from "../../../public/cta/cta-image.png";

export default function CtaUi() {
  return (
    <section className=" py-32 bg-[#f5f5f7]">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" w-full overflow-hidden">
          <Image
            src={CtaImage}
            width={620}
            height={360}
            className=" object-cover"
            alt="Cta Image"
          />
        </div>
        <div className=" w-full overflow-hidden">
          <div>
            <h2>Your Vision, Our Passion Outstanding Results</h2>
            <form action="" method="post" className=" flex gap-3 pt-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className=" w-96 py-3 px-6 rounded-full placeholder:text-primary focus:outline-primary"
              />
              <button
                type="submit"
                className=" px-7 py-2 rounded-full bg-secondary-blue text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
