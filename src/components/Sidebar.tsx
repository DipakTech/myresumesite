"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";

import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          exit={{ x: -200 }}
          className="px-6  z-[100] py-10  max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"
        >
          <div className="flex-1 overflow-auto">
            <SidebarHeader />
            <Navigation />
          </div>
          <div>
            {/* <Badge href="/resume" text="Read Resume" /> */}
            <Badge
              href="https://portfolio.dipakgiri12.com.np/resume/Dipak_Giri_Resume.pdf"
              text="Read Resume"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative ">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          // onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-primary/80 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-secondary shadow-lg text-primary",
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500",
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-primary/90 hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500",
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="https://www.dipakgiree.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDipakGiri.1979d6c1.png&w=640&q=75"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Dipak Giri </p>
        <p className="font-light text-primary/80">Full stack developer</p>
      </div>
    </div>
  );
};
