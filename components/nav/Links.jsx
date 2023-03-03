"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { rubik } from "@/app/layout";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Links() {
  const pathname = usePathname();

  const routes = {
    home: "/",
    general: "/category/general",
    business: "/category/business",
    science: "/category/science",
    sports: "/category/sports",
    technology: "/category/technology",
    health: "/category/health",
  }

  return (
    <div className="h-[40px] flex gap-6 md:gap-8 justify-start overflow-x-auto lg:justify-center relative px-6 border-solid border-b-[1px] dark:border-b-neutral-700 links">
      {Object.entries(routes).map((route) => (
        <SingleRoute key={route[0]} path={pathname} title={route[0]} route={route[1]} />
      ))}
    </div>
  )
}

function SingleRoute({ title, route, path }) {
  return (
    <div className="flex flex-col justify-center relative">
      <Link className={`${rubik.className} capitalize whitespace-nowrap text-[15px] ${route === path ? "text-blue-700 dark:text-white-primary" : "text-neutral-600 dark:text-neutral-400 hover:dark:text-neutral-300"}`} href={route}>{title}</Link>
      { route === path && (
        <motion.div layoutId="route" className="self-end absolute bottom-0 border-solid w-full border-2 border-blue-500 rounded-t-lg">
        </motion.div> 
      )}
    </div>
  )
}