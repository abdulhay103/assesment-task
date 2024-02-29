import About from "@/components/agency/About";
import About2 from "@/components/agency/About2";
import Agency from "@/components/agency/Agency";
import BlogUI from "@/components/blogs/BlogUI";
import ContactUi from "@/components/contact/ContactUi";
import Banner from "@/components/hero/Banner";
import { NavbarUi } from "@/components/master/header/NavbarUi";
import Brands from "@/components/others/Brands";
import CtaUi from "@/components/others/CtaUi";
import Reviews from "@/components/others/Reviews";
import ServiceUI from "@/components/services/ServiceUI";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <NavbarUi />
      <Banner />
      <ServiceUI />
      <Brands />
      <About />
      <Agency />
      <Reviews />
      <About2 />
      <ContactUi />
      <BlogUI />
      <CtaUi />
    </React.Fragment>
  );
}
