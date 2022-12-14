import Head from "next/head"
import { useState } from "react"
import Image from "next/image"
import Navigation from "../components/navigation"
import ReactPageScroller from "react-page-scroller"
export default function Home({}) {
   const [menuOpen, setMenuOpen] = useState(false)
   const [selectedTable, setSelectedTable] = useState()

   //click
   function clicky() {}
   let options = {
      animationTimer: 850,
      animationTimerBuffer: 0,
      renderAllPagesOnFirstRender: true,
   }

   return (
      <>
         <Head>
            <title>HomePage portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="flex items-center justify-center h-[100vh] px-[70px]">
            <div className="w-1/2">
               <h1 className="text-6xl">About Page</h1>
            </div>
         </div>
      </>
   )
}

export async function getStaticProps() {
   return {
      props: {},
   }
}
