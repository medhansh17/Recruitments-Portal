"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";

interface BounceAnimationProps {
  y: number[];
  transition: {
    duration: number;
    repeat: number;
    repeatType: "reverse";
    ease: string;
  };
}

const bounceAnimation: BounceAnimationProps = {
  y: [0, -20, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

export default function ScrollIndicator() {
  const [orientation, setOrientation] = useState<boolean>(true);
  const [direction, setDirection] = useState<boolean>(true);


  function handleScroll() {

    if(window.scrollY + window.innerHeight > document.body.scrollHeight - 100){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

    }
    else{
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      })
    }

  }

  useEffect(() => {
    function handleScrollDirection() {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setDirection(false);
      } else {
        setDirection(true);
      }
    }

    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);



  return (
      <motion.div
          animate={bounceAnimation}
          className="fixed bottom-5 w-full flex justify-center items-center z-"
      >
        <img
            src={
              orientation
                  ? "/graphics/scrollindicator.svg"
                  : "/graphics/scrollindicator-rot.svg"
            }
            className={`${direction ? "rotate-0" : "rotate-180"} $`}
            alt="scroll-indicator"
            width={50}
            height={50}
            onClick={() =>
              handleScroll()
            }
            onMouseOver={() => setOrientation(false)}
            onMouseOut={() => setOrientation(true)}
        />
      </motion.div>
  );
}
