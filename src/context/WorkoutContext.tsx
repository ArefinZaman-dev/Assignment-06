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


      if (typeof window !== "undefined") {


        const storedPlan =
          localStorage.getItem(
            "fitlog-plan"
          );



        if (storedPlan) {

          return JSON.parse(
            storedPlan
          ) as Workout[];

        }


      }


      return [];


    });








  const [saved, setSaved] =
    useState<Workout[]>(() => {


      if (typeof window !== "undefined") {


        const storedSaved =
          localStorage.getItem(
            "fitlog-saved"
          );



        if (storedSaved) {

          return JSON.parse(
            storedSaved
          ) as Workout[];

        }


      }


      return [];


    });









  useEffect(() => {


    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );


  }, [plan]);









  useEffect(() => {


    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );


  }, [saved]);












  const addToPlan = (
    workout: Workout
  ) => {



    const alreadyAdded =
      plan.find(
        item => item.id === workout.id
      );



    if (alreadyAdded) {

      return false;

    }





    if (plan.length >= 5) {

      return false;

    }





    setPlan(
      previousPlan => [
        ...previousPlan,
        workout
      ]
    );



    return true;


  };













  const addToSaved = (
    workout: Workout
  ) => {



    const alreadySaved =
      saved.find(
        item => item.id === workout.id
      );



    if (alreadySaved) {

      return false;

    }





    setSaved(
      previousSaved => [
        ...previousSaved,
        workout
      ]
    );



    return true;


  };













  const removeFromPlan = (
    id: number
  ) => {



    setPlan(
      previousPlan =>
        previousPlan.filter(
          item => item.id !== id
        )
    );


  };












  const removeFromSaved = (
    id: number
  ) => {



    setSaved(
      previousSaved =>
        previousSaved.filter(
          item => item.id !== id
        )
    );


  };












  return (


    <WorkoutContext.Provider

      value={{

        plan,

        saved,


        addToPlan,

        addToSaved,


        removeFromPlan,

        removeFromSaved,

      }}

    >


      {children}


    </WorkoutContext.Provider>


  );


};









export const useWorkout = () => {



  const context =
    useContext(
      WorkoutContext
    );



  if (!context) {


    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );


  }



  return context;



};