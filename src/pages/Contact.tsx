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


  return (
    <div className={styles.background}>
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Kontaktirajte nas</h2>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vaš email"
          />

          <label htmlFor="message">Poruka *</label>
          <textarea
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Vaša poruka"
            rows={5}
          />

          <label htmlFor="gender">Pol</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Muški</option>
            <option value="Female">Ženski</option>
            <option value="Other">Ostalo</option>
          </select>

          {error && <p className={styles.error}>{error}</p>}

          <Button text="Pošalji poruku" type="submit"/>
        </form>

        {submittedData && (
          <section className={styles.result}>
            <h3>Poslati podaci:</h3>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Poruka:</strong> {submittedData.message}
            </p>
            <p>
              <strong>Pol:</strong> {submittedData.gender === "Male" ? "Muški" : submittedData.gender === "Female" ? "Ženski" : "Ostalo"}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

export default Contact;
