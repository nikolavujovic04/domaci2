import React, { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/Login.module.scss";
import User from "../models/User"; // import klase User

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Email i lozinka ne smeju biti prazni.");
      return;
    }

    // Kreiramo instancu User klase
    const user = new User(email, password);

    // Primer korišćenja metoda klase
    console.log("Masked password:", user.getMaskedPassword());
    console.log("Email domain:", user.getEmailDomain());

    // Prosleđujemo User objekat login funkciji
    login(user.email, user.password);

    navigate("/profile");
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {error && <div className={styles.error}>{error}</div>}

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
        />

        <input
          type="password"
          placeholder="Lozinka"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <Button text="Prijavi se" type="submit" />
      </form>
    </div>
  );
};

export default Login;
