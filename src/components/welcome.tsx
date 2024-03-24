"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Welcome() {
  const Ref = useRef(null);
  const inView = useInView(Ref, { amount: 0.5, once: false });
  const animationOnViewLeft = {
    hidden: {
      scaleX: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  };
  const animationOnViewRight = {
    hidden: {
      scaleX: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  };
  return (
    <section
      ref={Ref}
      className="hidden md:flex h-screen  flex-col justify-center items-center"
    >
      <div className="flex flex-row justify-center items-center w-3/4">
        <motion.img
          variants={animationOnViewLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          src="/graphics/left-lines.svg"
          alt="left-lines"
          className="w-1/3 h-1/10 origin-right"
        />
        <h1 className="text-6xl text-center text-white mx-5 font-striger">
          Welcome
        </h1>
        <motion.img
          variants={animationOnViewLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          src="/graphics/right-lines.svg"
          alt="right-lines"
          className="w-1/3 h-1/10 origin-left"
        />
      </div>
      <div className="h-10"></div>
      <div className="w-3/4 font-sarpanch text-white">
        <p className="text-center text-xl">
          Experience our IEEE Computer Society (IEEE-CS) chapter VIT, where
          innovation <br /> meets exploration. Join us as we delve into the
          exciting world of technology, where <br /> we empower seekers like you
          to unearth technological treasures.
        </p>
      </div>
    </section>
  );
}
