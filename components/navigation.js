import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useNavContext } from "../context/navigation"
import { motion, AnimatePresence } from "framer-motion"

import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { VscClose } from "react-icons/vsc"

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

export default function Navigation({}) {
   const [menuOpen, setMenuOpen] = useNavContext()
   const router = useRouter()

   useEffect(() => {
      if (menuOpen) {
         setMenuOpen(false)
      }
   }, [router.asPath])

   return (
      <>
         <nav className="absolute top-0 left-0 right-0 z-50 w-full">
            <ul className="flex justify-between  mx-auto my-0 px-[70px] pt-5">
               <li
                  onClick={() => {
                     setMenuOpen(!menuOpen)
                  }}
               >
                  <Link href="/" className="text-lg">
                     Logo
                  </Link>
               </li>
               <li
                  onClick={() => {
                     setMenuOpen(!menuOpen)
                  }}
                  className="cursor-pointer"
               >
                  {menuOpen ? (
                     <VscClose size={24} />
                  ) : (
                     <HiOutlineMenuAlt4 size={24} />
                  )}
               </li>
            </ul>
         </nav>
         <AnimatePresence>
            {menuOpen && (
               <motion.ul
                  variants={parent}
                  initial="initial"
                  animate="animate"
                  transition={transition}
                  className="flex flex-col justify-center items-center w-[100vw] h-[100vh] absolute top-0 left-0 z-10 bg-transparent"
               >
                  <div class="overflow-hidden">
                     <motion.li
                        initial={{ y: 80 }}
                        animate={{
                           y: 0,
                           transition: { delay: 0, ...transition },
                        }}
                        exit={{
                           y: 80,
                           transition: { delay: 0.5, ...transition },
                        }}
                        className="p-2 my-4 text-6xl font-semibold"
                     >
                        <Link href="/about">About</Link>
                     </motion.li>
                  </div>
                  <div class="overflow-hidden">
                     <motion.li
                        initial={{ y: 80 }}
                        animate={{
                           y: 0,
                           transition: { delay: 0.3, ...transition },
                        }}
                        exit={{
                           y: 80,
                           transition: { delay: 0.3, ...transition },
                        }}
                        className="p-2 my-4 text-6xl font-semibold"
                     >
                        <Link href="/">portfolio</Link>
                     </motion.li>
                  </div>

                  <div class="overflow-hidden">
                     <motion.li
                        initial={{ y: 80 }}
                        animate={{
                           y: 0,
                           transition: { delay: 0.5, ...transition },
                        }}
                        exit={{
                           y: 80,
                           transition: { delay: 0, ...transition },
                        }}
                        className="p-2 my-4 text-6xl font-semibold"
                     >
                        <Link href="/contact">contact</Link>
                     </motion.li>
                  </div>
               </motion.ul>
            )}
         </AnimatePresence>
      </>
   )
}
