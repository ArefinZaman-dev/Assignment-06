"use client";

import {
  Dumbbell,
  Bookmark,
} from "lucide-react";

import { toast } from "react-toastify";

import { Workout } from "@/types/workout.type";

import { useWorkout } from "@/context/WorkoutContext";



const WorkoutActions = ({
  workout,
}: {
  workout: Workout;
}) => {



  const {
    plan,
    addToPlan,
    addToSaved,
  } = useWorkout();






  const handleAddPlan = () => {


    const added =
      addToPlan(workout);



    if (added) {


      toast.success(
        "Added to today's plan"
      );


    } else {


      if (plan.length >= 5) {


        toast.warning(
          "You can add maximum 5 workouts"
        );


      } else {


        toast.warning(
          "Workout already added"
        );


      }


    }


  };








  const handleSave = () => {


    const saved =
      addToSaved(workout);



    if (saved) {


      toast.success(
        "Saved for later"
      );


    } else {


      toast.warning(
        "Workout already saved"
      );


    }


  };









  return (


    <div className="mt-10 flex flex-wrap gap-4">



      <button

        type="button"

        onClick={handleAddPlan}

        disabled={plan.length >= 5}

        className="
        flex items-center gap-2
        rounded-full
        bg-[#ccff00]
        px-6
        py-3
        font-bold
        text-black
        transition
        hover:scale-105
        disabled:cursor-not-allowed
        disabled:opacity-50
        "

      >


        <Dumbbell size={18} />


        Add to todays plan


      </button>







      <button

        type="button"

        onClick={handleSave}

        className="
        flex items-center gap-2
        rounded-full
        border
        border-white/20
        px-6
        py-3
        font-bold
        transition
        hover:bg-white/10
        "

      >


        <Bookmark size={18} />


        Save for later


      </button>




    </div>


  );


};



export default WorkoutActions;