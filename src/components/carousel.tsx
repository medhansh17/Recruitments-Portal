import { useState } from 'react';
import FaqCard from "./faqcard";
import Image from 'next/image';
import Question from './quiz/Question';
import { motion ,Variants } from "framer-motion";


type Question = {
  question: string;
  answer: string;
};

type CarouselProps = {
  questions: Question[];

};

const bounceAnimation:Variants = {
  bounce: {
    x: [0, 20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType:"reverse" ,
      ease: "easeInOut",
    },
  },
};

export default function Carousel({ questions }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNextClick = () => {
    setCurrentIndex(prevIndex => prevIndex + 4);
  };

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => prevIndex - 4);
  }

  return (
    <>
      <section className="hidden md:flex md:flex-row">
      <motion.button
        animate="bounce"
        variants={bounceAnimation}
        onClick={handlePrevClick}
        className={`${currentIndex < 4 ? 'hidden' : 'block'} fixed z-50 h-[60vh] flex items-center justify-center left-5`}
      >
        <img
          src="/graphics/scrollindicator.svg"
          alt="scroll-indicator"
          width={50}
          height={50}
          style={{ transform: 'rotate(90deg)' }}
        />
      </motion.button>        
      {questions.slice(currentIndex, currentIndex + 4).map((faq, index) => (
                <FaqCard key={index} indx={(currentIndex + index + 1).toString()} question={faq.question} answer={faq.answer} />
              ))}
      <motion.button
        animate="bounce"
        variants={bounceAnimation}
        onClick={handleNextClick}
        className={`${currentIndex >= questions.length - 4 ? 'hidden' : 'block'} fixed z-50 h-[60vh] flex items-center justify-center right-5`}
      >
        <img
          src="/graphics/scrollindicator.svg"
          alt="scroll-indicator"
          width={50}
          height={50}
          style={{ transform: 'rotate(270deg)' }}
        />
      </motion.button>      
    </section>

      <section className="flex flex-col h-full min-h-screen md:hidden w-screen overflow-y-auto">
      {questions.map((faq, index) => (
        <FaqCard key={index} indx={(index+1).toString()} question={faq.question} answer={faq.answer} />
      ))}
    </section>
    </>
  );
}