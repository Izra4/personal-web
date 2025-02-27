import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import SubmitButton from "./submit-button";
import Input from "./input";
import { useState } from "react";
import Image from "next/image";

const Form = ({ poppins }: { poppins: string }) => {
  const [longURL, setLongURL] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<"error" | "success">("error");
  const [showModal, setShowModal] = useState(false); // To manage modal visibility
  const [modalData, setModalData] = useState<string>(""); // Data to display in modal

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!longURL) {
      setAlertMessage("Long URL is required");
      setAlertSeverity("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    try {
      const response = await fetch("/api/shortener", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longURL, customURL }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setLongURL("");
        setCustomURL("");
        setAlertMessage("Short URL created successfully!");
        setAlertSeverity("success");
        setShowAlert(true);
        setModalData(responseData.shortURL); // Assuming the API returns the short URL as `shortURL`
        setShowModal(true); // Show the modal with the response data
        setTimeout(() => setShowAlert(false), 7000);
      } else {
        const errorData = await response.text();
        setCustomURL("");
        setAlertMessage(errorData);
        setAlertSeverity("error");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
      }
    } catch (error) {
      console.error(error);
      setAlertMessage("An error occurred. Please try again.");
      setAlertSeverity("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className={`${poppins} bg-[#F9FAFB] w-1/3 h-fit mt-4 rounded-xl shadow-lg`}>
      <form className="flex flex-col w-full h-full text-primary_text font-medium text-md px-8 mt-6">
        <Input
          poppinsClass={poppins}
          id={"longURL"}
          name={"longURL"}
          label={"Your long URL here"}
          placeholder={"looooong url"}
          value={longURL}
          onChange={(e) => {
            setLongURL(e.target.value);
          }}
        />
        <Input
          poppinsClass={poppins}
          id={"customURL"}
          name={"customURL"}
          label={"Your custom URL here"}
          placeholder={"rekomendasi-film-2025"}
          value={customURL}
          onChange={(e) => {
            setCustomURL(e.target.value);
          }}
        />
        <div className="flex justify-center items-center mt-3">
          <Image src={"/decor.svg"} alt={""} width={150} height={150} layout=""></Image>
        </div>
        {showAlert && (
          <Alert severity={alertSeverity} className="-mb-2 mt-3">
            {alertMessage}
          </Alert>
        )}
        <SubmitButton onClick={handleSubmit} poppins={poppins}></SubmitButton>
      </form>

      {/* Modal to display short URL */}
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogTitle>Your short URL Created</DialogTitle>
        <DialogContent>
          <p>Your short URL is:</p>
          <p>
            <strong>{modalData}</strong>
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Form;
