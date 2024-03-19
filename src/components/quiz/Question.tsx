import { useState } from "react";
import round1 from "@/constants/round1.json";
import Input from "./Input";

const Option = ({ text, ansArr, setAnsArr, questionNumber }) => {
  return (
    <li
      className={`p-2 bg-[#522481] bg-opacity-50 rounded-xl backdrop-blur-sm border-main-blue border-2 my-10 cursor-pointer`}
      onClick={() => {
        setAnsArr((prev: string[]) => {
          const newArr = [...prev];
          newArr[questionNumber - 1] = text;
          return newArr;
        });
      }}
    >
      {text}
    </li>
  );
};

const Question = ({ questionNumber, ansArr, setAnsArr }) => {
  const [option, setOption] = useState<number>(1);
  const question = round1[questionNumber - 1];
  const options = question.options?.map((option, idx) => (
    <Option
      key={idx}
      text={option}
      setAnsArr={setAnsArr}
      ansArr={ansArr}
      questionNumber={questionNumber}
    />
  ));
  return (
    <div className="QnA">
      <h1 className="font-bold font-striger tracking-wider text-xl">
        {round1[questionNumber - 1].question}
      </h1>
      {round1[questionNumber - 1].options ? (
        options
      ) : (
        <Input
          setAnsArr={setAnsArr}
          ansArr={ansArr}
          questionNumber={questionNumber}
        />
      )}
    </div>
  );
};

export default Question;
