"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./button";
import Header from "./header";
import SubHeader from "./subdomain-header";

const dropdownVariants = {
  key: "div",
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { type: "spring", bounce: 0.35 },
  },
  exit: {
    scaleY: 0,
    transition: { when: "afterChildren" },
  },
  transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
};

export default function JoinTeam(props: {
  teamName: string;
  order: string;
  titles: string[];
}) {
  const [isShown, setIsShown] = useState(false);
  const onClick = () => {
    setIsShown(!isShown);
    if (!isShown) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };
  useEffect(() => {
    setIsShown(false);
    document.body.style.overflow = "auto";
  }, []);
  return (
    <>
      <div
        className={`flex ${
          props.order === "1"
            ? "flex-col md:flex-row"
            : "flex-col md:flex-row-reverse"
        }  justify-evenly items-center h-screen w-full`}
      >
        <Header title={props.teamName} />
        <Button text="JOIN THE TEAM" onClick={onClick} />
      </div>
      <AnimatePresence>
        {isShown && (
          <motion.div
            {...dropdownVariants}
            className="w-full h-screen bg-main-bg inset-0 flex  flex-col justify-around items-center fixed z-20 origin-top"
          >
            <div className="w-[95%] h-[70%] flex flex-row  justify-evenly items-center flex-wrap gap-x-[14%]">
              {props.titles.map((title) => (
                <motion.div key={title}>
                  <SubHeader title={title} />
                </motion.div>
              ))}
            </div>
            <Button text="CONFIRM" onClick={onClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
