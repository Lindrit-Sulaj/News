"use client"

import { useState, useEffect } from "react";
import { roboto, rubik } from "@/app/layout";

export default function Navbar() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
  
  return (
    <nav className="h-[70px] flex justify-between items-center px-2 md:px-8 w-full bg-neutral-100 dark:bg-black-dark">
      <h1 className={`${roboto.className} hidden md:block dark:text-white text-2xl font-bold`}>News</h1>
      
      <button className="bg-black-light border-solid border-[1px] border-neutral-600 text-neutral-200 flex items-center py-[6px] px-4 rounded-md w-full grow max-w-[340px] md:max-w-[300px] hover:bg-black-medium transition-all">
        <span className="material-symbols-outlined text-xl mr-1">search</span>
        <span className={`${rubik.className} text-[15px]`}>Search</span>
        <span className="border-solid border-[1px] border-neutral-500 w-6 flex justify-center items-center h-6 rounded-md ml-auto text-sm font-medium">/</span>
      </button>
      
      <div className="flex gap-2">
        <button className="grow bg-black-medium w-10 h-10 flex items-center justify-center text-white rounded-md">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="text-neutral-300 w-10 h-10 flex items-center justify-center">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </div>
    </nav>
  )
}