"use client";

import { useState } from "react";

import { Workout } from "@/types/workout.type";

import WorkoutCard from "./WorkoutCard";



interface WorkoutsProps {
  workouts: Workout[];
}




const Workouts = ({
  workouts,
}: WorkoutsProps) => {



  const [sortType, setSortType] =
    useState("duration");




  const sortedWorkouts =
    [...workouts].sort((a, b) => {



      if(sortType === "calories"){

        return (
          b.caloriesBurned -
          a.caloriesBurned
        );

      }





      if(sortType === "rating"){

        return (
          b.rating -
          a.rating
        );

      }





      return (
        a.duration -
        b.duration
      );



    });







  return (


    <section

      id="library"

      className="container mx-auto px-4 py-16"

    >




      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">



        <div>


          <h2 className="text-4xl font-black uppercase">

            The Library

          </h2>



          <p className="mt-3 text-white/60">

            Twelve lifts covering every major muscle group.

          </p>


        </div>







        <div>


          <select

            value={sortType}

            onChange={(e)=>setSortType(e.target.value)}

            className="
            rounded-full
            border
            border-white/20
            bg-[#080808]
            px-5
            py-3
            font-bold
            outline-none
            "

          >


            <option value="duration">

              Sort By Duration

            </option>



            <option value="calories">

              Sort By Calories

            </option>



            <option value="rating">

              Sort By Rating

            </option>



          </select>


        </div>



      </div>









      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


        {

          sortedWorkouts.map((workout)=>(


            <WorkoutCard

              key={workout.id}

              workout={workout}

            />


          ))

        }


      </div>





    </section>


  );


};



export default Workouts;