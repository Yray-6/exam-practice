/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaTimes } from "react-icons/fa";

const InfoModal = ({ isOpen, onClose }: any) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white p-6 rounded-md shadow-lg w-[80%] max-w-md lg:w-full flex flex-col gap-4 transform transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <h2 className="text-lg lg:text-xl text-blue-900 font-bold mb-4">
            There’s been an update!
          </h2>
          <FaTimes
            className="text-red-500 text-3xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <p className="mb-4">We’ve added a new Test Mode:</p>
        <p>You can now practice questions in a gamified experience</p>
        <ul className="list-disc ml-4">
          <li>140 Questions</li>
          <li>1hr30mins Time Limit</li>
          <li>Questions are randomized to help you prepare for test day</li>
          <li>Click on the page title -CPG Test Practice Questions- to return to home at any point</li>
        </ul>
        <p className="font-semibold italic">
          NB: If you would still prefer to attempt questions linearly as before,
          please select &apos;Standard Mode&apos;{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoModal;
