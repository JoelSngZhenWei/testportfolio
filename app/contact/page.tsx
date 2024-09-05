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
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null); // Ref to textarea

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
      textareaRef.current.style.height = "auto"; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height to the scroll height
    }
  };

  useEffect(() => {
    autoResizeTextarea(); // Initial resize in case there is initial content
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading spinner

    // Send form data to backend API endpoint
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsLoading(false); // Stop loading spinner

    if (response.ok) {
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear fields
    } else {
      setShowErrorModal(true);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Contact Me Title */}
      <h1 className="text-center text-4xl font-bold mb-4">Contact Me</h1>
      {/* Email Address */}
      <p className="text-center text-2xl font-semibold text-highlightRed mb-8">
        joelsngzw@gmail.com
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
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
              className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 placeholder-transparent focus:border-red-700 focus:outline-none focus:ring-0"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-2 text-sm text-highlightRed duration-300 transform -translate-y-4 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
              className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 placeholder-transparent focus:border-red-700 focus:outline-none focus:ring-0"
              placeholder="Your Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 text-sm text-highlightRed duration-300 transform -translate-y-4 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
            className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 placeholder-transparent focus:border-red-700 focus:outline-none focus:ring-0"
            placeholder="Subject"
            required
          />
          <label
            htmlFor="subject"
            className="absolute left-0 top-2 text-sm text-highlightRed duration-300 transform -translate-y-4 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
            className="peer block w-full appearance-none border-0 border-b-2 border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 placeholder-transparent focus:border-red-700 focus:outline-none focus:ring-0 overflow-hidden"
            placeholder="Your Message"
            style={{ minHeight: "4rem" }} // Set a reasonable default height
            required
          />
          <label
            htmlFor="message"
            className="absolute left-0 top-2 text-sm text-highlightRed duration-300 transform -translate-y-4 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div className="loader">Loading...</div> // Replace with your spinner component or design
          ) : (
            <button
              type="submit"
              className="bg-highlightRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
            >
              Submit 
            </button>
          )}
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Email Sent Successfully!</h2>
            <button
              onClick={closeModal}
              className="bg-highlightRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Failed to Send Email.</h2>
            <button
              onClick={closeModal}
              className="bg-highlightRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
