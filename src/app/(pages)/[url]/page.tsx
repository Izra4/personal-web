"use client";

import { Lexend, Poppins } from "next/font/google";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "../shortener/_components/input";
import { Alert } from "@mui/material";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function GetLongURL() {
  const url = usePathname();
  const [password, setPassword] = useState("");
  const [requiresPassword, setRequiresPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<"error" | "success">("error");

  useEffect(() => {
    if (url) {
      fetch(`/api/url/validator?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            redirect("/404");
          } else if (data.password) {
            setRequiresPassword(true);
          } else {
            fetch(`/api/url?url=${url}`)
              .then((response) => response.json())
              .then((data) => {
                if (data.error) {
                  redirect("/404");
                } else {
                  window.location.href = data.longURL;
                }
              });
          }
        });
    }
  }, [url]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch(`/api/url/validator?url=${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();

    if (data.isValid) {
      fetch(`/api/url?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            redirect("/404");
          } else {
            setAlertMessage("Redirecting...");
            setAlertSeverity("success");
            setShowAlert(true);
            window.location.href = data.longURL;
          }
        });
    } else {
      setAlertMessage("Password invalid!");
      setAlertSeverity("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return requiresPassword ? (
    <div className="bg-primary w-screen min-h-screen lg:h-screen flex flex-col">
      <div className="flex justify-center items-center w-screen min-h-screen flex-col px-12">
        <p className={`${lexend.className} font-semibold text-2xl text-primary_text text-center`}>
          This link is <span className="text-secondary_text"> protected! </span> <br />
          Enter the password to access it.
        </p>
        <div className="flex flex-col w-full md:w-1/3 h-fit bg-[#F9FAFB] rounded-lg shadow-lg p-4 mt-4">
          <div className="w-full h-full flex flex-col">
            {showAlert && (
              <Alert severity={alertSeverity} className="mb-1">
                {alertMessage}
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col text-primary_text">
              <Input
                poppinsClass={lexend.className}
                id={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"******"}
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className={`w-2/6 bg-[#962727] hover:bg-secondary_text transition-all duration-300 ease-in-out py-2 rounded-md shadow-lg ${poppins.className} font-semibold text-white`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
