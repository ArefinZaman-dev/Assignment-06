"use client";

import Image from "next/image";
import Link from "next/link";

import { Check, X } from "lucide-react";
import { toast } from "react-toastify";

import { Workout } from "@/types/workout.type";
import { useWorkout } from "@/context/WorkoutContext";



const PlanCard = ({
  workout,
}: {
  workout: Workout;
}) => {



  const {
    done,
    markAsDone,
    removeFromPlan,
  } = useWorkout();





  const isDone =
    done.includes(workout.id);






  const handleDone = () => {


    markAsDone(workout.id);


    toast.success(
      "Workout marked as done"
    );


  };







  const handleRemove = () => {


    removeFromPlan(workout.id);


    toast.success(
      "Workout removed from plan"
    );


  };






  return (


    <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 md:flex-row">



      <div className="relative h-52 w-full overflow-hidden rounded-2xl md:w-72">


        <Image

          src={workout.image}

          alt={workout.name}

          fill

          sizes="300px"

          className="object-cover"

        />


      </div>






      <div className="flex flex-1 flex-col justify-between">



        <div>


          <h2 className="text-2xl font-black uppercase">

            {workout.name}

          </h2>




          <p className="mt-2 text-white/60">

            {workout.equipment}

          </p>





          <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/70">


            <span>
              ⏱ {workout.duration} min
            </span>



            <span>
              🔥 {workout.caloriesBurned} kcal
            </span>



            <span>
              ⭐ {workout.rating}
            </span>



          </div>




        </div>







        <div className="mt-6 flex flex-wrap gap-3">



          <Link

            href={`/workout/${workout.id}`}

            className="rounded-full bg-[#ccff00] px-5 py-3 font-bold text-black"

          >

            View Details

          </Link>







          <button

            onClick={handleDone}

            disabled={isDone}

            className="
            flex items-center gap-2
            rounded-full
            border
            border-white/20
            px-5
            py-3
            font-bold
            disabled:opacity-50
            "

          >

            <Check size={18}/>

            {
              isDone
              ? "Completed"
              : "Mark as Done"
            }


          </button>







          <button

            onClick={handleRemove}

            className="
            flex items-center gap-2
            rounded-full
            border
            border-red-500/40
            px-5
            py-3
            font-bold
            text-red-400
            "

          >

            <X size={18}/>

            Remove


          </button>




        </div>





      </div>




    </div>


  );


};


export default PlanCard;