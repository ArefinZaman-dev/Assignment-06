"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Workout } from "@/types/workout.type";



type WorkoutContextType = {

  plan: Workout[];

  saved: Workout[];

  done: number[];


  addToPlan: (
    workout: Workout
  ) => boolean;


  addToSaved: (
    workout: Workout
  ) => boolean;


  removeFromPlan: (
    id: number
  ) => void;


  removeFromSaved: (
    id: number
  ) => void;


  markAsDone: (
    id: number
  ) => void;


};







const WorkoutContext =
  createContext<WorkoutContextType | undefined>(
    undefined
  );









export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {



  const [plan, setPlan] =
    useState<Workout[]>(() => {


      if(typeof window !== "undefined"){


        const data =
          localStorage.getItem(
            "fitlog-plan"
          );


        if(data){

          return JSON.parse(data);

        }


      }


      return [];

    });








  const [saved, setSaved] =
    useState<Workout[]>(() => {


      if(typeof window !== "undefined"){


        const data =
          localStorage.getItem(
            "fitlog-saved"
          );


        if(data){

          return JSON.parse(data);

        }


      }


      return [];


    });








  const [done, setDone] =
    useState<number[]>(() => {


      if(typeof window !== "undefined"){


        const data =
          localStorage.getItem(
            "fitlog-done"
          );


        if(data){

          return JSON.parse(data);

        }


      }


      return [];


    });









  useEffect(()=>{


    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );


  },[plan]);









  useEffect(()=>{


    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );


  },[saved]);









  useEffect(()=>{


    localStorage.setItem(
      "fitlog-done",
      JSON.stringify(done)
    );


  },[done]);












  const addToPlan = (
    workout: Workout
  ) => {


    const exists =
      plan.some(
        item=>item.id === workout.id
      );


    if(exists){

      return false;

    }



    if(plan.length >= 5){

      return false;

    }



    setPlan(
      previous=>[
        ...previous,
        workout
      ]
    );



    return true;


  };












  const addToSaved = (
    workout: Workout
  ) => {



    const exists =
      saved.some(
        item=>item.id === workout.id
      );


    if(exists){

      return false;

    }



    setSaved(
      previous=>[
        ...previous,
        workout
      ]
    );



    return true;


  };












  const removeFromPlan = (
    id:number
  )=>{


    setPlan(
      previous=>
        previous.filter(
          item=>item.id !== id
        )
    );


  };












  const removeFromSaved = (
    id:number
  )=>{


    setSaved(
      previous=>
        previous.filter(
          item=>item.id !== id
        )
    );


  };












  const markAsDone = (
    id:number
  )=>{


    setDone(
      previous=>{


        if(previous.includes(id)){

          return previous;

        }


        return [
          ...previous,
          id
        ];


      }
    );


  };












  return (

    <WorkoutContext.Provider

      value={{

        plan,

        saved,

        done,


        addToPlan,

        addToSaved,


        removeFromPlan,

        removeFromSaved,


        markAsDone,


      }}

    >


      {children}


    </WorkoutContext.Provider>

  );


};












export const useWorkout = ()=>{


  const context =
    useContext(
      WorkoutContext
    );



  if(!context){


    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );


  }



  return context;


};