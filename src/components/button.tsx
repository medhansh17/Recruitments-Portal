"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ButtonProps = {
  text: string;
};

export default function Button({text}:ButtonProps) {
  const Ref = useRef(null);
  const inView = useInView(Ref, { amount: 0.5, once: false });
  const animationOnViewLeft = {
    hidden: {
      opacity: 0,
      x: "50%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  };

  const animationOnViewRight = {
    hidden: {
      opacity: 0,
      x: "-50%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  };

  const animationOnViewText = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
    },
  };

  return (
    <div
      ref={Ref}
      className="sm:w-[350px] sm:h-[120px] w-[300px] h-[90px] flex items-center bg-[url('/button-background.svg')] bg-contain bg-center bg-no-repeat z-10 relative group hover:scaleX-105 "
    >
      <motion.div
        variants={animationOnViewLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="z-[-1] w-[40%] h-[98%] bg-[url('/button-white-left.svg')] bg-contain bg-center bg-no-repeat relative left-0 group-hover:-translate-x-2 duration-[300ms] ease-in"
      ></motion.div>
      <motion.div
        variants={animationOnViewLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="z-[-2] w-[40%] h-[68%] bg-[url('/button-purple-left.svg')] absolute bg-contain bg-center bg-no-repeat  left-1 group-hover:-translate-x-2 duration-[300ms] ease-in"
      ></motion.div>
      <motion.p
        variants={animationOnViewText}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-main-pink drop-shadow-xl text-2xl sm:text-[1.75rem] inline-block absolute left-[50%] translate-x-[-50%] w-full text-center group-hover:scaleY-110 duration-[300ms] ease-in font-bold  "
      >
        {text}
        <span className="absolute rounded-full bg-main-pink w-[45px] h-[45px] blur-[55px] right-[50%] translate-x-[50%]"></span>
      </motion.p>
      <motion.div
        variants={animationOnViewRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="z-[-1] w-[40%] h-[98%] bg-[url('/button-white-right.svg')] bg-contain bg-center bg-no-repeat absolute right-0 group-hover:translate-x-2 duration-[300ms] ease-in"
      ></motion.div>
      <motion.div
        variants={animationOnViewRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="z-[-2] w-[40%] h-[68%] bg-[url('/button-purple-right.svg')] absolute bg-contain bg-center bg-no-repeat  right-1 group-hover:translate-x-2 duration-[300ms] ease-in"
      ></motion.div>
    </div>
  );
}
