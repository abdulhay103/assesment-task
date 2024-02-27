import React from "react";
import BrandCraft from "/public/colaborators/brandCraft.png";
import Saas from "/public/colaborators/saas.png";
import PixelPerfect from "/public/colaborators/pixel-perfect.png";
import ContentWizerd from "/public/colaborators/content-wizerd.png";
import BrandRevive from "/public/colaborators/brand-revive.png";
import SaasBlue from "/public/colaborators/saas-blue.png";
import Image from "next/image";

export default function Brands() {
  return (
    <section className=" bg-[#F5F5F7] py-10">
      <div className=" -ml-48 flex gap-5 mb-6">
        <h2 className=" text-[#514A74]">BrandCraft</h2>
        <Image
          src={Saas}
          width={147}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={PixelPerfect}
          width={285}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={ContentWizerd}
          width={375}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={BrandRevive}
          width={293}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={SaasBlue}
          width={137}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
      </div>
      <div className=" flex gap-5 justify-end -mr-10 ">
        <h2 className=" text-[#514A74]">BrandCraft</h2>
        <Image
          src={Saas}
          width={147}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={PixelPerfect}
          width={285}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={ContentWizerd}
          width={375}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={BrandRevive}
          width={293}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
        <Image
          src={SaasBlue}
          width={137}
          height={56}
          className=" object-cover"
          alt="Bands Icon"
        />
      </div>
    </section>
  );
}
