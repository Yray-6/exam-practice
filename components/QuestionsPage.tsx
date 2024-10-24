/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { questions } from "@/questions";
import Questions from "./Questions";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import TestQuestions from "./TestQuestions";
import ScoreModal from "./ScoreModal";
import ConfirmationModal from "./ConfirmationModal";
import { IoHomeSharp } from "react-icons/io5";
import InfoModal from "./InfoModal";
import { ScaleLoader } from "react-spinners";

const QuestionsPage = () => {
  const [isCorrect, setIsCorrect] = useState<{ [key: number]: boolean }>({});
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationType, setConfirmationType] = useState("submit");
  const [practiceMode, setPracticeMode] = useState("");
  const initialTime = 5400;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentPage, setCurrentPage] = useState(1);
  const [randomQuestions, setRandomQuestions] = useState<any[]>([]);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInfoModalOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setInfoModalOpen(false);
  };
  const questionsPerPage = 20;
  const testQuestionCount = 140;

  const totalQuestions =
    practiceMode === "test" ? testQuestionCount : questions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions =
    practiceMode === "test"
      ? randomQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion)
      : questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Helper function to get random questions
  function getRandomQuestions(questions: any[], count: number) {
    const shuffled = [...questions]; // Create a copy of the questions array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled.slice(0, count); // Return the first `count` items
  }

  // When test mode is selected, generate random questions
  useEffect(() => {
    if (practiceMode === "test") {
      const randomSelection = getRandomQuestions(questions, testQuestionCount);
      setRandomQuestions(randomSelection);
    }
  }, [practiceMode]);

  // Format the time into Hours, Minutes, and Seconds (HH:MM:SS)
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const handleSubmit = () => {
    const correctness: { [key: number]: boolean } = {};
    let correctCount = 0;

    const allQuestions = practiceMode === "test" ? randomQuestions : questions;

    allQuestions.forEach((question) => {
      correctness[question.id] =
        selectedOptions[question.id] === question.correctOption;
      if (correctness[question.id]) correctCount++;
    });

    setIsCorrect(correctness);
    setShowResults(true);
    setCorrectAnswersCount(correctCount);
    setShowModal(true);
    setTimeLeft(0);
  };

  const handleReset = () => {
    setConfirmationType("retry");
    setShowConfirmationModal(true);
  };

  const handleRetrySame = () => {
    // const randomSelection = getRandomQuestions(questions, testQuestionCount);
    // setRandomQuestions(randomSelection);

    setSelectedOptions({});
    setIsCorrect({});
    setShowResults(false);
    handlePageChange(1);
    setCorrectAnswersCount(0);
    setShowConfirmationModal(false);
    setShowModal(false);
    setTimeLeft(initialTime); // Restart the timer
  };

  const handleRetryNew = () => {
    const randomSelection = getRandomQuestions(questions, testQuestionCount);
    setRandomQuestions(randomSelection);

    setSelectedOptions({});
    setIsCorrect({});
    setShowResults(false);
    handlePageChange(1);
    setCorrectAnswersCount(0);
    setShowConfirmationModal(false);
    setShowModal(false);
    setTimeLeft(initialTime); // Restart the timer
  };

  const handleOptionClick = (questionId: number, optionKey: string) => {
    if (!showResults) {
      setSelectedOptions((prev) => ({ ...prev, [questionId]: optionKey }));
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (practiceMode === "test" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleSubmit();
    }

    return () => clearInterval(timer);
  }, [practiceMode, timeLeft]);

  const handleConfirmSubmit = () => {
    setConfirmationType("submit");
    setShowConfirmationModal(true);
  };

  // When the user confirms, proceed with submission
  const confirmSubmission = () => {
    setShowConfirmationModal(false); // Close the confirmation modal
    handleSubmit(); // Now call the actual submit function
  };

  // If the user cancels, close the modal
  const cancelSubmission = () => {
    setShowConfirmationModal(false);
  };

  const handleModeChange = (mode: string) => {
    setPracticeMode("loading");

    const timer = setTimeout(() => {
      setPracticeMode(mode);
      handlePageChange(1)
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <div className="pt-28 pb-12 px-6 lg:px-16">
      <div
        className={`${
          practiceMode === "" ? "block" : "hidden"
        } bg-blue-100 p-6 mb-8 rounded-lg shadow-md`}
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-4">
          Welcome to the Practice Test
        </h2>
        <p className="text-base lg:text-lg text-gray-700 mb-2">
          This practice test will help you prepare for the CPG exam. Carefully
          read each question and choose the best answer.
        </p>
        <p className="text-base lg:text-lg text-gray-700">
          Click on an answer to reveal whether it’s correct or not. After
          reviewing your answer, you can hide the explanation and move to the
          next question.
        </p>
      </div>

      <div
        className={`${
          practiceMode === "" ? "flex" : "hidden"
        } flex-col text-center w-full justify-center items-center my-20 gap-8`}
      >
        <div className="text-xl font-bold animate-bounce">
          Please select a Practice mode
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly gap-5 text-white text-lg">
          <div
            onClick={() => handleModeChange("standard")}
            className="h-[30vh] bg-blue-500 w-[80%] lg:w-2/5 hover:shadow-xl hover:scale-105 hover:bg-blue-700 cursor-pointer rounded-xl flex flex-col items-center justify-center"
          >
            <div className="font-bold">Standard Mode</div>
            <ul className=" text-gray-900 pt-2 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaTimes className="text-red-500" /> Randomized
              </li>
              <li className="flex items-center gap-2">
                <FaTimes className="text-red-500" /> Time-based
              </li>
            </ul>
            <div className="italic w-full p-5 xl:text-center text-xs md:text-sm text-left text-gray-300">
              Answer all as past questions at your own pace.
            </div>
          </div>
          <div
            onClick={() => handleModeChange("test")}
            className="h-[30vh] bg-orange-600 hover:bg-orange-700 hover:scale-105 w-[80%] lg:w-2/5 hover:shadow-xl cursor-pointer rounded-xl flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-2 font-bold">
              Test Mode <MdAccessTime />
            </div>
            <ul className=" text-gray-900 pt-2 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Randomized
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Time-based
              </li>
            </ul>
            <div className="italic w-full xl:text-center p-5 text-xs md:text-sm text-left text-gray-300">
              Attempt 140 questions chosen at random with a time limit of
              1hr30mins
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          practiceMode === "test" ? "fixed" : "hidden"
        } w-full left-0 top-16 `}
      >
        <div
          className={`bg-gray-200 flex text-right items-center flex-row-reverse justify-between p-4 mb-4 text-xl font-bold`}
        >
          <div className="">
            {!showResults && practiceMode === "test" && (
              <button
                onClick={handleConfirmSubmit}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition-all"
              >
                Submit
              </button>
            )}
            {showResults && practiceMode === "test" && (
              <div className="flex items-end gap-3 ">
                <button
                  onClick={handleReset}
                  className="mt-4 text-xl bg-gray-600 min-w-fit text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition-all"
                >
                  Try Again
                </button>
                <div className="w-full text-5xl">
                  <IoHomeSharp
                    className="cursor-pointer"
                    onClick={() => window.location.reload()}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex  justify-center items-center gap-1">
            <MdAccessTime className="text-2xl" /> {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div
        className={` ${
          practiceMode === "standard" ? "flex" : "hidden"
        } justify-between items-center mb-8`}
      >
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
            ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Next
        </button>
      </div>
      {practiceMode === "loading" && (
        <div className="w-full h-[100vh] flex items-center justify-center text-orange-600">
          <ScaleLoader />
        </div>
      )}
      {practiceMode === "standard" && (
        <Questions currentQuestions={currentQuestions} />
      )}
      {practiceMode === "test" && (
        <TestQuestions
          currentQuestions={currentQuestions}
          onOptionClick={handleOptionClick}
          showResults={showResults}
          isCorrect={isCorrect}
          selectedOptions={selectedOptions} // Pass selected options to child
        />
      )}

      <div
        className={` ${
          practiceMode !== "standard" || "test" ? "hidden" : "flex"
        } justify-between items-center mb-8`}
      >
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
            ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Next
        </button>
      </div>

      <ScoreModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          handlePageChange(1);
        }}
        totalQuestions={randomQuestions.length}
        correctAnswers={correctAnswersCount}
      />

      <ConfirmationModal
        isOpen={showConfirmationModal}
        onConfirm={confirmSubmission}
        onCancel={cancelSubmission}
      />
      <ConfirmationModal
        isOpen={confirmationType === "retry" && showConfirmationModal}
        onConfirm={handleRetrySame}
        onCancel={handleRetryNew}
        title="Try Again"
        subtitle="Do you want to try again with same questions ?"
      />
      <InfoModal isOpen={isInfoModalOpen} onClose={closeModal} />
    </div>
  );
};

export default QuestionsPage;
