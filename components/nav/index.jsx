"use client"

import { useState, useEffect } from "react";
import { roboto, rubik } from "@/app/layout";
import Search from "./Search";
import Links from "./Links";

export default function Navbar() {
  const [isSearching, setIsSearching] = useState(false);

  const openSearch = () => setIsSearching(true);
  const closeSearch = () => setIsSearching(false);

  const handleColorSwitch = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="h-auto bg-white-primary absolute top-0 w-full dark:bg-black-dark">
      <nav className="h-[70px] flex justify-between items-center gap-4 px-4 md:px-8 w-full bg-neutral-primary dark:bg-black-dark">
        <h1 className={`${roboto.className} hidden md:block dark:text-white-primary text-2xl font-bold`}>News</h1>

        <button className="bg-white-secondary dark:bg-black-light border-solid border-[1px] border-neutral-200 text-neutral-600 dark:border-neutral-600 dark:text-neutral-200 flex items-center py-[6px] px-4 rounded-lg w-full grow md:max-w-[300px] hover:bg-white-primary dark:hover:bg-black-medium transition-all" onClick={openSearch}>
          <span className="material-symbols-outlined text-xl mr-1">search</span>
          <span className={`${rubik.className} text-[15px]`}>Search</span>
          <span className="border-solid border-[1px] border-neutral-500 w-6 flex justify-center items-center h-6 rounded-md ml-auto text-sm font-medium">/</span>
        </button>

        <div className="flex gap-2">
          <button className="grow bg-white-terciary dark:bg-black-medium w-10 h-10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 rounded-xl">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button onClick={handleColorSwitch} className="text-neutral-600 dark:text-neutral-300 w-10 h-10 flex items-center justify-center">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>

        <Search
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          open={openSearch}
          close={closeSearch} />
      </nav>
      <Links />
    </div>
  )
}