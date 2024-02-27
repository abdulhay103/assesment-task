import React from "react";
import Phone from "../../../public/icons/phone.png";
import Image from "next/image";

export default function ContactUi() {
  return (
    <section className=" py-20">
      <div className="container mx-auto flex justify-between">
        <div className="w-[375px]">
          <h2>Contact For Urgent Service</h2>
          <p className=" pt-5">
            Creative agency encompasses a wides range of services related to the
            design creative and strategic
          </p>
          <div className=" flex gap-5 items-center pt-8">
            <div className=" w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#f5f5f7]">
              <Image
                src={Phone}
                width={20}
                height={20}
                className=" object-cover"
                alt="Phone"
              />
            </div>
            <h5>+(201) 555-0124</h5>
          </div>
        </div>
        <div className="w-[800px]">
          <form className=" w-full" action="" method="post">
            <div className=" w-full flex gap-6 justify-between pb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className=" px-6 py-3 border rounded-20"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                className=" px-6 py-3 border rounded-20"
              />
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Date"
                className=" px-6 py-3 border rounded-20"
              />
            </div>
            <div className=" w-full flex gap-6 justify-between pb-5">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Your Address"
                className=" px-6 py-3 border rounded-20"
              />
              <input
                type="email"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className=" px-6 py-3 border rounded-20"
              />
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Date"
                className=" px-6 py-3 border rounded-20"
              />
            </div>
            <div className="w-full pb-4 ">
              <textarea
                name="message"
                id="message"
                cols="30"
                placeholder="Write Message.."
                className=" w-full h-[150px] resize-none px-6 py-3 border rounded-20"
              />
            </div>
            <button
              className=" px-6 py-3 bg-secondary-blue text-white rounded-full"
              type="submit"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
