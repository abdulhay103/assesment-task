"use client";
import React, { useEffect, useState } from "react";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import Brand from "/public/brand.png";

export function NavbarUi() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    // Add event listener for window scroll
    window.addEventListener("scroll", () => {
      let header = document.querySelector(".stickyHeader");
      header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const navList = (
    <div className=" flex flex-col lg:flex-row gap-6 pt-8 lg:pt-0">
      <Link href={"/"} className=" text-primary font-semibold">
        Home
      </Link>
      <Link href={"/"} className=" text-primary font-semibold">
        About Us
      </Link>
      <Link href={"/"} className=" text-primary font-semibold">
        Services
      </Link>
      <Link href={"/"} className=" text-primary font-semibold">
        Projects
      </Link>
      <Link href={"/"} className=" text-primary font-semibold">
        Page
      </Link>
      <Link href={"/"} className=" text-primary font-semibold">
        Contact
      </Link>
    </div>
  );

  return (
    <Navbar className="stickyHeader absolute lg:backdrop-blur-none border-b border-gray-300 lg:backdrop-saturate-100 lg:bg-opacity-0 top-0 z-50 max-w-full rounded-none px-6 py-6 lg:px-0 lg:py-5 shadow-none transition-all duration-300">
      <div className=" w-full container mx-auto py-2">
        <div className=" flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={Brand}
              width={200}
              height={100}
              className=" object-cover"
              alt="Logo"
            />
          </Link>
          <div className="flex gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className=" flex items-center justify-center h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <div className=" hidden lg:block">
            <div className="flex gap-5">
              <div className=" bg-primary p-5 rounded-full">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className=" text-primary">Need help?</p>
                <h5>(808) 555-0111</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
