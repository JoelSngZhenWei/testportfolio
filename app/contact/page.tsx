"use client";

import { useState, useRef, useEffect } from "react";
import React, { FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
    autoResizeTextarea();
  };

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResizeTextarea();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsLoading(false);

    if (response.ok) {
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setShowErrorModal(true);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 sm:px-8 py-12 dark:bg-gray-900">
      {/* Contact Me Title */}
      <h1 className="text-center text-4xl font-bold mb-4 text-black dark:text-white">
        Contact Me
      </h1>
      {/* Email Address */}
      <p className="text-center text-2xl font-semibold text-highlightRed dark:text-red-400 mb-8">
        joelsngzw@gmail.com
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-lg"
      >
        {/* Name and Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white placeholder-transparent focus:border-red-700 dark:focus:border-red-500 focus:outline-none focus:ring-0"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-0 text-sm text-highlightRed dark:text-red-400 duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white placeholder-transparent focus:border-red-700 dark:focus:border-red-500 focus:outline-none focus:ring-0"
              placeholder="Your Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-0 text-sm text-highlightRed dark:text-red-400 duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
        </div>

        {/* Subject Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white placeholder-transparent focus:border-red-700 dark:focus:border-red-500 focus:outline-none focus:ring-0"
            placeholder="Subject"
            required
          />
          <label
            htmlFor="subject"
            className="absolute left-0 top-0 text-sm text-highlightRed dark:text-red-400 duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subject
          </label>
        </div>

        {/* Message Field */}
        <div className="relative mb-6">
          <textarea
            id="message"
            name="message"
            ref={textareaRef}
            value={formData.message}
            onChange={handleTextareaChange}
            className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white placeholder-transparent focus:border-red-700 dark:focus:border-red-500 focus:outline-none focus:ring-0 overflow-hidden"
            placeholder="Your Message"
            style={{ minHeight: "4rem" }}
            required
          />
          <label
            htmlFor="message"
            className="absolute left-0 top-0 text-sm text-highlightRed dark:text-red-400 duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div className="loader dark:text-white">Loading...</div>
          ) : (
            <button
              type="submit"
              className="bg-highlightRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-400"
            >
              Submit
            </button>
          )}
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Email Sent Successfully!
            </h2>
            <button
              onClick={closeModal}
              className="bg-highlightRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600 dark:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Failed to Send Email.
            </h2>
            <button
              onClick={closeModal}
              className="bg-highlightRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600 dark:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
