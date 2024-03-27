import { useEffect, useState } from "react";
// import round1 from "@/constants/round1.json";
import Input from "./Input";
import { set } from "firebase/database";
import axios from "axios";
import { useRouter } from "next/navigation";

interface OptionProps {
  text: string;
  ansArr: string[];
  setAnsArr: React.Dispatch<React.SetStateAction<string[]>>;
  questionNumber: number;
}

interface answerFormat {
  q: string;
  ans: string;
}

interface OptionData {
  _id: string;
  question: string;
  type: string;
  options: string[];
}

const Option = ({ text, ansArr, setAnsArr, questionNumber }: OptionProps) => {
  return (
    <li
      className={`p-2 bg-[#522481] bg-opacity-50 rounded-xl backdrop-blur-sm border-main-blue border-2 ${
        text === ansArr[questionNumber - 1]
          ? "border-4 border-main-pink"
          : "border-2"
      } my-6 cursor-pointer`}
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

interface QuestionProps {
  questionNumber: number;
  ansArr: string[];
  setAnsArr: React.Dispatch<React.SetStateAction<string[]>>;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface QuestionData {
  question: string;
  options?: string[];
}

const Question = ({
  questionNumber,
  ansArr,
  setAnsArr,
  setQuestionNumber,
}: QuestionProps) => {
  const router = useRouter();
  const [option, setOption] = useState<number>(1);
  const [round1, setRound1] = useState<OptionData[]>([]);
  const question: QuestionData = round1[questionNumber - 1];

  const options = question?.options?.map((option, idx) => (
    <Option
      key={idx}
      text={option}
      setAnsArr={setAnsArr}
      ansArr={ansArr}
      questionNumber={questionNumber}
    />
  ));
  useEffect(() => {
    setRound1(JSON.parse(localStorage.getItem("questions") || "[]"));
  }, []);

  const emailValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("email"))
    ?.split("=")[1];
  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken"))
    ?.split("=")[1];

  const sendData = () => {
    const anwArray: answerFormat[] = [];
    for (let i = 0; i < ansArr.length; i++) {
      anwArray.push({
        q: round1[i].question,
        ans: ansArr[i],
      });
    }
    // TODO: Add loader
    axios
      .post(
        `https://recruitments-portal-backend.vercel.app/question/${localStorage.getItem(
          "domain"
        )}/${emailValue}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((_) => {
        axios.patch(
          `https://recruitments-portal-backend.vercel.app/response/submit`,
          {
            email: emailValue,
            domain: JSON.parse(localStorage.getItem("domain") || "").toString(),
            questions: anwArray,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      })
      .then((_) => {
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log("Error in submitting response");
        console.log(error);
      });
  };
  return (
    <div className="QnA">
      <h1 className="font-bold font-striger tracking-wider text-xl">
        {round1[questionNumber - 1]?.question}
      </h1>
      {round1[questionNumber - 1]?.options.length !== 0 ? (
        options
      ) : (
        <Input
          setAnsArr={setAnsArr}
          ansArr={ansArr}
          questionNumber={questionNumber}
        />
      )}
      <div className="flex justify-between mx-8 my-4 font-striger text-lg">
        <button
          disabled={questionNumber === 1}
          onClick={() => {
            setQuestionNumber((prev: number) => prev - 1);
          }}
        >
          prev
        </button>
        {questionNumber !== 10 ? (
          <button
            disabled={questionNumber === 10}
            onClick={() => {
              setQuestionNumber((prev: number) => prev + 1);
            }}
          >
            next
          </button>
        ) : (
          <button
            onClick={() => {
              // send data to server
              sendData();
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
