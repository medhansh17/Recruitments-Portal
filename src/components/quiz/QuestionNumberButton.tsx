interface QuestionNumberButtonProps {
  qNo: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  questionNumber: number;
}

const QuestionNumberButton: React.FC<QuestionNumberButtonProps> = ({
  qNo,
  setQuestionNumber,
  questionNumber,
}) => {
  return (
    <div
      className={`text-white font-striger bg-main-blue border-2 shadow-[#E80A89] ${
        questionNumber === qNo ? "shadow-md " : "shadow-none"
      } border-[#e80a887c] sm:p-2 h-8 w-8 sm:h-12 sm:w-12 rounded-full text-center bg-opacity-50 cursor-pointer hover:scale-105`}
      onClick={() => {
        setQuestionNumber(qNo);
      }}
    >
      {qNo}
    </div>
  );
};

export default QuestionNumberButton;