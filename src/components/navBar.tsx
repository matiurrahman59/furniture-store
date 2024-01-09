"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import { navLinks } from "@/assets/constants/navLink";
import SearchBox from "./searchBox";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="md:sticky md:top-0 md:z-[9999] bg-white w-full">
    <div>
      <div className="flex items-center justify-between p-4 lg:py-6 md:px-0 gap-5 lg:gap-8">
        {/* Header Logo */}
        <Link href="/">
          <Image
            src="/images/logo-dark.svg"
            alt="instor brand logo"
            width={105}
            height={42}
          />
        </Link>

        {/* Search input for large devices*/}
        {/* <div className="hidden xl:flex-1 md:w-3/4 md:block">
          <SearchBox />
        </div> */}

        {/* Header right content */}
        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex items-center gap-2">
            <Link href="/cart" className="btn-primary flex gap-2 p-3">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Cart</span>
            </Link>
          </div>

          <button className="rounded-lg bg-black p-3 text-white transition-colors hover:bg-black/75">
            Log In/Sign Up
          </button>
        </div>
      </div>

      {/* Search input for small screen */}
      <div className="hidden sm:block sm:px-4 md:px-0 md:hidden">
        <SearchBox />
      </div>

      {/* Navbar for small devices */}
      <div className="fixed bottom-0 z-20 w-full border-t-[1px] border-gray/10 bg-white sm:hidden">
        <div>
          {
            <ul className="mx-auto flex w-full max-w-xs flex-row items-center justify-between py-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>
                    <div
                      className={`"transition-colors hover:text-slate-200" hover:text-orange ${
                        pathname === link.path ? "text-orange" : "text-gray"
                      }`}
                    >
                      {React.createElement(link.icon, {
                        className: "h-6 w-6",
                      })}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
    </div>

  );
}
