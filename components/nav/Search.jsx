"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { rubik } from '@/app/layout';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Backdrop({ children, close }) {
  return (
    <div onClick={close} className='fixed z-50 bg-[rgba(0,0,0,0.8)] w-full h-screen top-0 left-0  flex items-start justify-center'>
      {children}
    </div>
  )
}

const Search = ({ isSearching, open, close }) => {
  const router = useRouter();
  
  const [searchValues, setSearchValues] = useState({
    query: "",
    domains: "",
    sortBy: "",
    from: "",
    to: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    let link = `/search?`
    
    for (let param in searchValues) {
      if (searchValues[param] === "") { continue; }
      link += `${param}=${searchValues[param]}&`
    }

    if (link[link.length - 1] === "&") {
      link = link.slice(0, link.length - 1);
    }

    close();
    router.push(link);
  }

  return (
    <AnimatePresence>
      {isSearching && (
        <Backdrop close={close}>
          <motion.div
            className={`w-[90%] md:max-w-xl mt-20 h-auto bg-white-secondary dark:bg-black-medium rounded-md p-3 md:p-6 ${rubik.className}`}
            onClick={(e) => e.stopPropagation()}
            transition={{ type: 'just', duration: .25 }}
            initial={{ scale: .5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0, }}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Search for news'
                className={`w-full h-14 px-4 rounded-md dark:bg-black-dark bg-neutral-200 border-solid border-b-4 border-b-blue-500 outline-none text-white dark:text-white-primary ${rubik.className}`}
                value={searchValues.query}
                onChange={(e) => setSearchValues({
                  ...searchValues,
                  query: e.target.value
                })} />
              <p className='mt-10 mb-5 text-[15px] text-neutral-600 dark:text-neutral-300'>Narrow your search results</p>
              <div className='flex gap-3'>
                <div className='w-1/2'>
                  <label htmlFor="domains" className='block w-full text-neutral-500 dark:text-neutral-300 mb-1'>Domains:</label>
                  <input
                    type="text"
                    className='block w-full dark:bg-black-dark bg-neutral-200 px-3 py-2 outline-none rounded-md border-solid border-b-2  border-neutral-300 dark:text-neutral-400 dark:border-black-light'
                    placeholder="Choose domains"
                    value={searchValues.domains}
                    onChange={(e) => setSearchValues({
                      ...searchValues,
                      domains: e.target.value
                    })} />
                </div>
                <div className='w-1/2'>
                  <label htmlFor="sortBy" className='block w-full text-neutral-500 dark:text-neutral-300 mb-[6px]'>Sort by:</label>
                  <select name="sortBy" id="sortBy" className='block w-full bg-neutral-200 px-3 py-2 outline-none rounded-md border-solid border-b-2 text-neutral-600 dark:text-neutral-400 dark:bg-black-dark border-neutral-300  dark:border-black-light' value={searchValues.sortBy}
                    onChange={(e) => setSearchValues({
                      ...searchValues,
                      sortBy: e.target.value
                    })}>
                    <option value="">Select option</option>
                    <option value="relevancy">Relevancy</option>
                    <option value="popularity">Popularity</option>
                    <option value="publishedAt">Published at</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <div className="w-1/2">
                  <label htmlFor="from" className='block w-full text-neutral-500 dark:text-neutral-300 mb-[6px]'>From: </label>
                  <input
                    type="date"
                    name="from"
                    id="from"
                    className='block w-full bg-neutral-200 px-3 py-2 outline-none rounded-md border-solid border-b-2 text-neutral-400 dark:bg-black-dark border-neutral-300  dark:border-black-light'
                    value={searchValues.from}
                    onChange={(e) => setSearchValues({
                      ...searchValues,
                      from: e.target.value
                    })} />
                </div>
                <div className="w-1/2">
                  <label htmlFor="to" className='block w-full text-neutral-500 dark:text-neutral-300 mb-[6px]'>To</label>
                  <input
                    type="date"
                    name="to"
                    id="to"
                    className='block w-full bg-neutral-200 px-3 py-2 outline-none rounded-md border-solid border-b-2 text-neutral-400 dark:bg-black-dark border-neutral-300  dark:border-black-light'
                    value={searchValues.to}
                    onChange={(e) => setSearchValues({
                      ...searchValues,
                      to: e.target.value
                    })} />
                </div>
              </div>
              <div className='mt-6 flex gap-4 justify-end'>
                <button onClick={() => setSearchValues({
                  query: "",
                  domains: "",
                  sortBy: "",
                  from: "",
                  to: ""
                })} type="button" className='px-6 py-2 bg-neutral-300 dark:bg-black-light text-white rounded-md cursor-pointer dark:text-neutral-50'>Reset</button>
                <button type="submit" className='px-6 py-2 bg-blue-500 rounded-md cursor-pointer text-white-primary'>Search</button>
              </div>
            </form>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  )
}

export default Search