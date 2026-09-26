import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/shared/Navbar";

import Footer from "@/components/shared/Footer";

import { WorkoutProvider } from "@/context/WorkoutContext";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



const inter = Inter({
  subsets: ["latin"],
});




export const metadata: Metadata = {

  title: "FitLog",

  description: "Workout Library and Planning App",

};







export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body className={inter.className}>


        <WorkoutProvider>


          <Navbar />



          <main className="min-h-screen">

            {children}

          </main>





          <ToastContainer

            position="top-right"

            autoClose={2000}

            theme="dark"

          />





          <Footer />



        </WorkoutProvider>


      </body>


    </html>

  );


}