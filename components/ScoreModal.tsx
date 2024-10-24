import React from "react";

interface ScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalQuestions: number;
  correctAnswers: number;
}

const ScoreModal: React.FC<ScoreModalProps> = ({
  isOpen,
  onClose,
  totalQuestions,
  correctAnswers,
}) => {
  if (!isOpen) return null;

  const percentageScore = (correctAnswers / totalQuestions) * 100; // Keep it as a number
  const incorrectAnswers = totalQuestions - correctAnswers;
  const congratulatoryMessage =
    percentageScore > 65
      ? "Congratulations! You did great!"
      : "Try harder next time!";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col gap-5 justify-center items-center w-[80vw] lg:w-1/4 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Score</h2>
        <div className="w-full flex flex-wrap lg:gap-5">
        <p className="mb-2">Correct Answers: {correctAnswers}</p>
        <p className="mb-2">Incorrect Answers: {incorrectAnswers}</p>
        <p className="mb-4">Percentage: {percentageScore.toFixed(2)}%</p>
        </div>
        <p className="font-semibold">{congratulatoryMessage}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          View answers
        </button>
      </div>
    </div>
  );
};

export default ScoreModal;
