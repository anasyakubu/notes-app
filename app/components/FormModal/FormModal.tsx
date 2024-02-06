"use client";
import { useState } from "react";
const MyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("Form submitted");
    handleClose();
  };

  return (
    <>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onClick={handleOpen}
      >
        Open Modal
      </button>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative mx-auto w-full max-w-md overflow-y-auto rounded-lg bg-white p-4 shadow-lg">
          <div className="flex items-center justify-between rounded-t-lg bg-gray-100 p-4">
            <h3 className="text-lg font-medium text-gray-900">Modal Title</h3>
            <button
              type="button"
              className="inline-block rounded bg-gray-100 px-3 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
              onClick={handleClose}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l18 18"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="inline-block px-4 py-2 mr-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-primary border rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyModal;
