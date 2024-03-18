"use client";
import QuestionNumberButton from "@/components/quiz/QuestionNumberButton";
import { useState } from "react";

const page = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
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
  return (
    <main className="min-h-screen text-white">
      <div className="flex justify-around mx-20">{questionsArray}</div>
    </main>
  );
};

export default page;
