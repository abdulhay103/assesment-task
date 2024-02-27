import About from "@/components/agency/About";
import Agency from "@/components/agency/Agency";
import Banner from "@/components/hero/Banner";
import { NavbarUi } from "@/components/master/header/NavbarUi";
import Brands from "@/components/others/Brands";
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
    </React.Fragment>
  );
}
