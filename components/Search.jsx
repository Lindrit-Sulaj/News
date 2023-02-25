"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { rubik } from '@/app/layout';

function Backdrop({ children, close }) {
  return (
    <div onClick={close} className='absolute bg-[rgba(0,0,0,0.8)] w-full h-screen top-0 left-0 flex justify-center'>
      {children}
    </div>
  )
}

const Search = ({ isSearching, open, close }) => {
  return (
    <AnimatePresence>
      {isSearching && (
        <Backdrop close={close}>
          <motion.div
            className={`w-[85%] md:max-w-xl mt-20 h-96 bg-black-medium rounded-md p-6 ${rubik.className}`}
            onClick={(e) => e.stopPropagation()}
            transition={{ type: 'just', duration: .25 }}
            initial={{ scale: .5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0, }}>
            <form>
              <input type="text" placeholder='Search for news' className={`w-full h-14 px-4 rounded-md bg-black-dark border-solid border-b-4 border-b-blue-500 outline-none text-white ${rubik.className}`} />
              <p className='mt-12 mb-5 text-[15px] text-neutral-300'>Narrow your search results</p>
              <div className='flex gap-3'>
                <div className='w-1/2'>
                  <label htmlFor="domains" className='block w-full text-neutral-300 mb-1'>Domains:</label>
                  <input type="text" className='block w-full bg-black-dark px-3 py-2 outline-none rounded-md border-solid border-b-2 text-white border-black-light' placeholder="Choose domains" />
                </div>
                <div className='w-1/2'>
                  <label htmlFor="sortBy" className='block w-full text-neutral-300 mb-[6px]'>Sort by:</label>
                  <select name="sortBy" id="sortBy" className='block w-full bg-black-dark px-3 py-2 outline-none rounded-md border-solid border-b-2 text-neutral-400 border-black-light'>
                    <option value="">Select option</option>
                    <option value="relevancy">Relevancy</option>
                    <option value="popularity">Popularity</option>
                    <option value="publishedAt">Published at</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <div className="w-1/2">
                  <label htmlFor="from" className='block w-full text-neutral-300 mb-[6px]'>From: </label>
                  <input type="date" name="from" id="from" className='block w-full bg-black-dark px-3 py-2 outline-none rounded-md border-solid border-b-2 text-neutral-400 border-black-light'/>
                </div>
                <div className="w-1/2">
                  <label htmlFor="to" className='block w-full text-neutral-300 mb-[6px]'>To</label>
                  <input type="date" name="to" id="to" className='block w-full bg-black-dark px-3 py-2 outline-none rounded-md border-solid border-b-2 text-neutral-400 border-black-light'/>
                </div>
              </div>
            </form>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  )
}

export default Search