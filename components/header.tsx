import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900 z-50 shadow-md">
      <div className="py-4 px-6 lg:py-5 lg:px-12 flex items-center justify-between">
        <h1 className="text-xl lg:text-3xl text-orange-500 font-bold tracking-wide">
          CPG Test Practice Questions
        </h1>
        <code className="text-base lg:text-lg text-gray-300 font-light">
          Y-Ray Tech
        </code>
      </div>
    </header>
  );
}
