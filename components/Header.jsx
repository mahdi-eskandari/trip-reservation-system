"use client";

import Link from "next/link";
import React from "react";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const activeStyle =
    "border-b-2 border-orange-500 text-white pb-1";

  const inactiveStyle =
    "text-gray-200 transition-colors hover:text-orange-400";

  return (
    <header
      className={`h-[140px] md:h-[90px] absolute left-0 top-0 z-50 w-full text-white backdrop-blur-sm ${
        isHomePage ? "bg-black/30" : "bg-blue-900 "
      }`}
    // style={{backgroundColor: "#070d3b5d"}}
    >

      <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between gap-0 px-10 py-0 md:h-[90px]">
        {/* لوگو - وسط در موبایل، چپ در دسکتاپ */}
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center gap-2 mt-5 md:mt-0"
        >
          <img
            src="https://img.icons8.com/?size=100&id=9351&format=png&color=F97316"
            alt="RideEasy bus logo"
            className="h-8 w-8 "
          />

          <div className="flex flex-col leading-none">
            <span className=" font-bold text-2xl">
              Ride<span className="text-orange-500">Easy</span>
            </span>

            <span className="mt-1 text-gray-200 text-[10px]">
              Book Smart. Travel Easy.
            </span>
          </div>
        </Link>

        {/* منو - زیر لوگو در موبایل، راست در دسکتاپ */}
        <nav className="flex items-center gap-10 mt-4">
          <Link
            href="/"
            className={pathname === "/" ? activeStyle : inactiveStyle}
          >
            Home
          </Link>

          <Link
            href="/my-tickets"
            className={
              pathname === "/my-tickets"
                ? activeStyle
                : inactiveStyle
            }
          >
            My Tickets
          </Link>

          <button
            type="button"
            className=" md:ml-10 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 transition hover:bg-black/50"
          >
            <User className="h-5 w-5" />
            <span className="text-sm hidden md:block">User Profile</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
