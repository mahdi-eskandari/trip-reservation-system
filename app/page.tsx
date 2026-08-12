"use client"
import React from 'react'
import Image from "next/image";
import { Bus, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../components/Header"

export default function page() {
  const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("en-US", { month: "long" });
const year = date.getFullYear();

  return (
    <section className="relative h-full w-full ">
      <div className="h-[300px] md:h-[400px] w-full">
        <img
          src="/hero.png"
          alt="Bus travel"
          className="h-full w-full object-cover mt-[-40px] hidden md:block"
        />
        <div className="md:hidden bg-blue-800 h-[140px] w-full"></div>
      </div>
      <div>
         
{/* <Header /> */}

      </div>

      <div className='hidden md:block absolute top-[150px] text-white w-[320px] left-[65px]'>
<h1 className='text-4xl font-bold mt-2'>Your Journey, Our <span className='text-orange-500'>Priority</span></h1>
<p className='text-md mt-2'>Book bus tickets online in seconds and travel across the city, the easy way.</p>
      </div>


      <div className="
      absolute
      left-1/2
      top-[150px]
      w-[95%]
      max-w-7xl
      -translate-x-1/2
      rounded-2xl
      bg-white
      p-4
      shadow-xl
      md:top-[340px]
      md:p-6
    ">
  <section className=" flex flex-col gap-4 md:flex-row md:items-end">
    {/* FROM CITY */}
{/* FROM + SWAP + TO */}
<div className="relative flex w-full flex-col md:contents">
  {/* FROM CITY */}
  <div className="w-full md:flex-1">
    <label
      htmlFor="origin"
      className=" text-[12px] font-medium text-gray-700"
    >
      FROM CITY
    </label>

    <div className="flex h-12 items-center gap-2 rounded-md border border-gray-300 px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 shrink-0 text-gray-400"
      >
        <path
          fillRule="evenodd"
          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clipRule="evenodd"
        />
      </svg>

      <input
        id="origin"
        type="text"
        placeholder="Departure airport"
        className="h-full w-full bg-transparent outline-none placeholder:text-gray-400"
      />
    </div>
  </div>

  {/* SWAP BUTTON */}
  <button
    type="button"
    className="
      absolute
      right-2
      top-[80px]
      z-10
      flex
      h-12
      w-12
      -translate-x-1/2
      -translate-y-1/2
      rotate-90
      items-center
      justify-center
      rounded-full
      bg-gray-200
      transition

      md:static
      md:h-12
      md:w-12
      md:translate-x-0
      md:translate-y-0
      md:rotate-0
      md:self-end
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  </button>

  {/* TO CITY */}
  <div className="w-full md:flex-1 mt-1">
    <label
      htmlFor="destination"
      className="block text-[12px] font-medium text-gray-700"
    >
      TO CITY
    </label>

    <div className="flex h-12 items-center gap-2 rounded-md border border-gray-300 px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 shrink-0 text-gray-400"
      >
        <path
          fillRule="evenodd"
          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clipRule="evenodd"
        />
      </svg>

      <input
        id="destination"
        type="text"
        placeholder="Destination airport"
        className="h-full w-full bg-transparent outline-none placeholder:text-gray-400"
      />
    </div>
  </div>
</div>



    {/* DATE */}
    <div className="w-full md:flex-1">
      <label
        htmlFor="date"
        className=" block text-[12px] font-medium text-gray-700"
      >
        DEPARTURE DATE
      </label>

      <div className="flex h-12 items-center rounded-md border border-gray-300 px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
        <input
          id="date"
          type="text"
          defaultValue={`${day} ${month}, ${year}`}
          className="h-full w-full bg-transparent outline-none"
        />
      </div>
    </div>

    {/* SEARCH */}
    <button
      type="button"
      className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 text-white transition hover:bg-orange-600"
    >
      <Search className="size-5" />
      <span>Search</span>
    </button>
  </section>
</div>


    </section>
  )
}
