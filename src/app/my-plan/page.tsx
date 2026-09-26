"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import PlanCard from "@/components/myPlan/PlanCard";
import { useWorkout } from "@/context/WorkoutContext";


const MyPlanPage = () => {


  const {
    plan,
  } = useWorkout();



const [mounted, setMounted] = useState(false);


useEffect(() => {

  const timer = setTimeout(() => {
    setMounted(true);
  }, 0);


  return () => clearTimeout(timer);

}, []);





  const totalMinutes = plan.reduce(
    (total, item) => total + item.duration,
    0
  );



  const totalCalories = plan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );





 if (!mounted) {

    return (

      <main className="container mx-auto px-4 py-20 text-center">

        <h2 className="text-3xl font-bold">
          Loading workouts...
        </h2>

      </main>

    );

  }






  return (

    <main className="container mx-auto px-4 py-16">



      <section>


        <h1 className="text-5xl font-black uppercase">
          My Plan
        </h1>



        <p className="mt-3 text-white/60">
          Cap of five lifts for today. Finish them, then load more.
        </p>


      </section>





      <section className="mt-10 grid gap-5 md:grid-cols-3">


        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <h3 className="text-white/60">
            Exercises
          </h3>


          <p className="mt-3 text-4xl font-black">
            {plan.length}
          </p>


        </div>





        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">


          <h3 className="text-white/60">
            Minutes
          </h3>


          <p className="mt-3 text-4xl font-black">
            {totalMinutes}
          </p>


        </div>





        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">


          <h3 className="text-white/60">
            Calories
          </h3>


          <p className="mt-3 text-4xl font-black">
            {totalCalories}
          </p>


        </div>


      </section>






      <section className="mt-12">


        <div className="flex gap-5 border-b border-white/10 pb-5">


          <button className="rounded-full bg-[#ccff00] px-5 py-2 font-bold text-black">
            Todays Plan
          </button>



          <button className="rounded-full border border-white/20 px-5 py-2 font-bold">
            Saved
          </button>


        </div>







        {
          plan.length === 0 ? (


            <div className="py-20 text-center">


              <h2 className="text-3xl font-black">
                NOTHING HERE YET
              </h2>



              <p className="mt-3 text-white/60">
                Browse the library and add a lift to get today moving.
              </p>



              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
              >
                Go to workouts
              </Link>


            </div>



          ) : (


            <div className="mt-8 grid gap-6">


              {
                plan.map((workout)=>(
                  
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                  />

                ))
              }


            </div>


          )
        }



      </section>




    </main>

  );

};


export default MyPlanPage;