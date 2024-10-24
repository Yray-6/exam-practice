import React from "react";

interface Question {
  id: number;
  question: string;
  options: { [key: string]: string };
  correctOption: string;
  comment?: string;
}

interface TestQuestionsProps {
  currentQuestions: Question[];
  onOptionClick: (questionId: number, optionKey: string) => void;
  showResults: boolean;
  isCorrect: { [key: number]: boolean };
  selectedOptions: { [key: number]: string }; // Accept selected options from parent
}

const TestQuestions: React.FC<TestQuestionsProps> = ({
  currentQuestions,
  onOptionClick,
  showResults,
  isCorrect,
  selectedOptions, // Get selected options here
}) => {
  return (
    <div>
      {currentQuestions.map((question) => (
        <div key={question.id} className="border border-gray-300 shadow-md rounded-lg my-10">
          <p className="bg-blue-600 text-white py-3 px-4 text-lg font-semibold">
            
          </p>
          <div className="p-4 lg:px-8 lg:py-6">
            <p className="mb-4 text-base font-bold lg:text-lg">
              {question.question}
            </p>
            <ul className="list-none space-y-2 text-sm">
              {Object.entries(question.options).map(([key, option], optionIndex) => (
                <li
                  key={key}
                  onClick={() => onOptionClick(question.id, key)}
                  className={`cursor-pointer p-2 rounded-md border transition-all
                    ${
                      showResults
                        ? key === question.correctOption
                          ? "border-green-500 bg-green-50"
                          : isCorrect[question.id] === false && selectedOptions[question.id] === key
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                        : selectedOptions[question.id] === key
                        ? "border-blue-500 bg-blue-50"
                        : "hover:border-gray-400"
                    } 
                    ${showResults ? "cursor-not-allowed" : ""}`}
                >
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </li>
              ))}
            </ul>
            {showResults && (
              <div className="mt-4 text-sm">
                {isCorrect[question.id] ? (
                  <p className="text-green-600">Correct! The answer is {question.correctOption}</p>
                ) : (
                  <p className="text-red-600">Incorrect. The correct answer is {question.correctOption}</p>
                )}
                {question.comment && (
                  <p className="text-gray-700 mt-2 italic">{question.comment}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestQuestions;
