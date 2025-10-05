import React, { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/Contact.module.scss"

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("Male");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    email: string;
    message: string;
    gender: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setError("Molimo popunite sva obavezna polja.");
      setSubmittedData(null);
      return;
    }
    setError("");
    setSubmittedData({ email, message, gender });
  };
}

export default Contact;
