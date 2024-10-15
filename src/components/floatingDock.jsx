import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandInstagram,
  IconCalendarMonth,
  IconMailFilled
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
        title: "contact@caimera.ai",
        icon: (
          <IconMailFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Content Calendar",
        icon: (
          <IconCalendarMonth className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.caimera.ai/calendar",
      },
      {
        title: "Instagram",
        icon: (
          <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/caimera.ai/",
      },
      {
        title: "Terms and Conditions",
        icon: (
          <Image
            src="https://framerusercontent.com/images/Cv1KpvqUzkh0CGoUnsnIHWNRhc.svg"
            width={20}
            height={20}
            alt="Terms and Conditions"
          />
        ),
        href: "https://www.caimera.ai/terms-conditions",
      },
    {
      title: "Privacy Policy",
      icon: (
        <Image
          src="https://res.cloudinary.com/dyg1rahpk/image/upload/v1728937421/rdsmxk2s0y1yyaokmugt.png"
          width={20}
          height={20}
          alt="Privacy Policy"
        />
      ),
      href: "https://www.caimera.ai/privacy-policy",
    },
    

    {
      title: "Careers",
      icon: (
        <Image
          src="https://res.cloudinary.com/dyg1rahpk/image/upload/v1728937768/xoeum9hh3comkow7uhcw.png"
          width={20}
          height={20}
          alt="Careers"
        />
      ),
      href: "https://wellfound.com/company/caimera/jobs",
    },
    
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
