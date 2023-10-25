// ErrorPage.js
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
navigate("/")
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={goBack}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <FiArrowLeft className="mr-2" /> Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
