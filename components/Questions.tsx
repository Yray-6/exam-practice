"use client";

import React, { useState } from "react";
import { questions } from "@/questions";

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState<{ [key: number]: string }>({});
  const [showAnswer, setShowAnswer] = useState<{ [key: number]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 20;

  const totalQuestions = questions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const handleOptionClick = (questionId: number, optionKey: string, correctOption: string) => {
    setSelectedOption((prev) => ({ ...prev, [questionId]: optionKey }));
    setShowAnswer((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleHideAnswer = (questionId: number) => {
    setShowAnswer((prev) => ({ ...prev, [questionId]: false }));
    setSelectedOption((prev) => ({ ...prev, [questionId]: "" }));
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Calculate the questions to display based on the current page
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  return (
    <div className="pt-28 pb-12 px-6 lg:px-16">
      {/* Introductory Section */}
      <div className="bg-blue-100 p-6 mb-8 rounded-lg shadow-md">
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-4">
          Welcome to the Practice Test
        </h2>
        <p className="text-base lg:text-lg text-gray-700 mb-2">
          This practice test will help you prepare for the CPG exam. Carefully read each question and choose the best answer.
        </p>
        <p className="text-base lg:text-lg text-gray-700">
          Click on an answer to reveal whether it’s correct or not. After reviewing your answer, you can hide the explanation and move to the next question.
        </p>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>

      {/* Questions List */}
      {currentQuestions.map((question) => (
        <div key={question.id} className="border border-gray-300 shadow-md rounded-lg mb-6">
          <p className="bg-blue-600 text-white py-3 px-4 text-lg font-semibold">
            Question {question.id}
          </p>
          <div className="p-4 lg:px-8 lg:py-6">
            <p className="mb-4 text-base font-bold lg:text-lg">{question.question}</p>
            <ul className="list-none space-y-2 text-sm">
              {Object.entries(question.options).map(([key, option]) => (
                <li
                  key={key}
                  onClick={() => handleOptionClick(question.id, key, question.correctOption)}
                  className={`cursor-pointer p-2 rounded-md border transition-all
                    ${showAnswer[question.id]
                      ? key === question.correctOption
                        ? "border-green-500 bg-green-50"
                        : selectedOption[question.id] === key
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                      : "hover:border-gray-400"}`}
                >
                  {option}
                </li>
              ))}
            </ul>
            {showAnswer[question.id] && (
              <div className="mt-4 text-sm">
                <p className="text-green-600">Correct answer: {question.correctOption}</p>
                {question.comment && <p className="text-gray-700 mt-2 italic">{question.comment}</p>}
              </div>
            )}
            <button
              onClick={() => handleHideAnswer(question.id)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
              Hide Answer
            </button>
          </div>
        </div>
      ))}

      {/* Pagination Controls (Repeated for easy navigation) */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
