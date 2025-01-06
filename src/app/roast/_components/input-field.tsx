"use client";

import { useState } from "react";
import ReviewForm from "./form";
import SendButton from "./button";
import { Alert } from "@mui/material";

const InputField = ({ poppins }: { poppins: string }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!review) {
    setAlertMessage("Your thoughts are mandatory!");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    return;
  }

  try {
    const response = await fetch("/api/roast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, roast: review }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit review");
    }

    const data = await response.json();
    console.log("Review submitted:", data);
    setName("");
    setReview("");
    setAlertMessage(null);
  } catch (error) {
    console.error(error);
  }
};

return (
  <div className="flex justify-center items-center w-full lg:w-2/5 2xl:w-2/6 p-10 lg:p-12 2xl:p-24">
    <div className="hidden md:flex w-full h-full">
      {showAlert && (
        <Alert severity="error" className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl mt-2 rounded-3xl">{alertMessage}</Alert>
      )}
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#DED8CF] rounded-2xl shadow-xl p-8 2xl:p-10">
        <div className="flex flex-col w-full h-full">
          <ReviewForm
            poppins={poppins}
            name={name}
            setName={setName}
            review={review}
            setReview={setReview}
          />
          <SendButton
            poppins={poppins}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>

    <div className="flex md:hidden w-full h-full">
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#DED8CF] rounded-2xl shadow-xl p-8 2xl:p-10">
        <div className="flex flex-col w-full h-full">
          <ReviewForm
            poppins={poppins}
            name={name}
            setName={setName}
            review={review}
            setReview={setReview}
          />
          {showAlert && (
            <Alert severity="error" className="mb-4">{alertMessage}</Alert>
          )}
          <SendButton
            poppins={poppins}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  </div>
);
};

export default InputField;
