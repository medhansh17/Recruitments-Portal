import React from "react";

const QuestionNumberButton = ({ qNo, setQuestionNumber, questionNumber }) => {
  return (
    <div
      className={`text-white bg-main-blue border-2 shadow-[#E80A89] ${
        questionNumber === qNo ? "shadow-md" : "shadow-none"
      } border-[#e80a887c] p-2 h-12 w-12 rounded-full text-center bg-opacity-50 cursor-pointer`}
      onClick={() => {
        setQuestionNumber(qNo);
      }}
    >
      {qNo}
    </div>
  );
};

export default QuestionNumberButton;
