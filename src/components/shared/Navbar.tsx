"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useWorkout } from "@/context/WorkoutContext";



const Navbar = () => {


  const pathname = usePathname();


  const {
    plan,
    saved,
  } = useWorkout();



  const [mounted, setMounted] = useState(false);



  useEffect(() => {

    const timer = setTimeout(() => {

      setMounted(true);

    }, 0);



    return () => clearTimeout(timer);


  }, []);




  const planCount = mounted ? plan.length : 0;

  const savedCount = mounted ? saved.length : 0;





  return (

    <nav className="border-b border-white/10 bg-[#080808]">


      <div className="container mx-auto flex items-center justify-between px-4 py-5">


        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ccff00] font-black text-black">

            F

          </span>


          <span className="text-2xl font-bold">

            FITLOG

          </span>


        </Link>






        <div className="flex gap-6 text-sm font-semibold">


          <Link

            href="/"

            className={
              pathname === "/"
                ? "text-[#ccff00]"
                : ""
            }

          >

            Workout

          </Link>




          <Link

            href="/my-plan"

            className={
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : ""
            }

          >

            My Plan

          </Link>


        </div>







        <div className="flex gap-3">


          <Link

            href="/my-plan"

            className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"

          >

            Plan {planCount}

          </Link>





          <Link

            href="/my-plan"

            className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold"

          >

            Saved {savedCount}

          </Link>




        </div>




      </div>


    </nav>

  );

};


export default Navbar;