"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const BeforeGetStarted = () => {
  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center">We take Privacy seriously</p>
      <p className="font-bold text-4xl">Before you get started</p>
      <p className="text-2xl font-semibold text-gray-600">
      &quot;We Wont share your answers with anyone. (and wont tell 
        <br /> you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="">with Love...</p>
        <motion.div
          width="650"
          variants={{
            initial: {
              opacity: 0,
              x: -10,
            },
            animate: {
              opacity: [0,0,0,0.5,1],
              x: [0,0,2.5,3,2.7,0],
              transition: {
                duration: 1.3},
            },
          }}
          height="500"
          initial="initial"
          animate="animate"
          viewBox="0 0 150 150"
        >
          <Image width={200} height={200} src="/signature.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "40%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0,0.25,0.5,0.8,1.01,1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%", // Adjust the width as needed
            overflow: "hidden", // Hide overflowing text while sliding
          }}
          className="pt-3"
        >
          <button className="rounded-3xl p-4 px-6 text-white bg-black">
            Start Test
          </button>
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default BeforeGetStarted;