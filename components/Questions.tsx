/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const Questions = ({currentQuestions}: {currentQuestions: any}) => {
  const [selectedOption, setSelectedOption] = useState<{
    [key: number]: string;
  }>({});
  const [showAnswer, setShowAnswer] = useState<{ [key: number]: boolean }>({});
  const [isCorrect, setIsCorrect] = useState<{ [key: number]: boolean }>({});
  const handleOptionClick = (
    questionId: number,
    optionKey: string,
    correctOption: string
  ) => {
    setSelectedOption((prev) => ({ ...prev, [questionId]: optionKey }));
    setShowAnswer((prev) => ({ ...prev, [questionId]: true }));
    setIsCorrect((prev) => ({
      ...prev,
      [questionId]: optionKey === correctOption,
    }));
  };

  const handleHideAnswer = (questionId: number) => {
    setShowAnswer((prev) => ({ ...prev, [questionId]: false }));
    setSelectedOption((prev) => ({ ...prev, [questionId]: "" }));
    setIsCorrect((prev) => ({ ...prev, [questionId]: false }));
  };

  return (
    <>
      {currentQuestions.map((question: any) => (
        <div
          key={question.id}
          className="border border-gray-300 shadow-md rounded-lg mb-6"
        >
          <p className="bg-blue-600 text-white py-3 px-4 text-lg font-semibold">
            Question {question.id}
          </p>
          <div className="p-4 lg:px-8 lg:py-6">
            <p className="mb-4 text-base font-bold lg:text-lg">
              {question.question}
            </p>
            <ul className="list-none space-y-2 text-sm">
              {Object.entries(question.options).map(([key, option], index) => (
                <li
                  key={key}
                  onClick={() => {
                    if (!showAnswer[question.id]) {
                      handleOptionClick(
                        question.id,
                        key,
                        question.correctOption
                      );
                    }
                  }}
                  className={`cursor-pointer p-2 rounded-md border transition-all
                    ${
                      showAnswer[question.id]
                        ? key === question.correctOption
                          ? "border-green-500 bg-green-50"
                          : selectedOption[question.id] === key
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                        : "hover:border-gray-400"
                    } 
                    ${showAnswer[question.id] ? "cursor-not-allowed" : ""} ${
                    selectedOption[question.id] ? "pointer-events-none" : ""
                  }`}
                  // Disable options after selection
                >
                  {/* Add labels A, B, C, etc. to each option */}
                  {`${String.fromCharCode(65 + index)}. ${String(option)}`}
                </li>
              ))}
            </ul>
            {showAnswer[question.id] && (
              <div className="mt-4 text-sm">
                {isCorrect[question.id] ? (
                  <p className="text-green-600">
                    Correct! The answer is {question.correctOption}
                  </p>
                ) : (
                  <p className="text-red-600">
                    Incorrect. The correct answer is {question.correctOption}
                  </p>
                )}
                {question.comment && (
                  <p className="text-gray-700 mt-2 italic">
                    {question.comment}
                  </p>
                )}
                <button
                  onClick={() => handleHideAnswer(question.id)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
                >
                  Hide Answer
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Questions;
