"use client";
import Question from "@/components/quiz/Question";
import QuestionNumberButton from "@/components/quiz/QuestionNumberButton";
import { useState } from "react";

const page = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [ansArr, setAnsArr] = useState<string[]>(Array(10).fill(""));
  const arr = new Array(10).fill(0);
  console.log(questionNumber);
  const questionsArray = arr.map((_, idx) => (
    <QuestionNumberButton
      key={idx}
      qNo={idx + 1}
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}
    />
  ));
  console.log(ansArr);
  return (
    <main className="min-h-screen text-white mx-20 flex flex-col justify-center py-10">
     <Question questionNumber={questionNumber} ansArr={ansArr} setAnsArr={setAnsArr} setQuestionNumber={setQuestionNumber}/>
      <div className="flex justify-around">{questionsArray}</div>
    </main>
  );
};

export default page;
