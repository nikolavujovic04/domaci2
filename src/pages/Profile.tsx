import React, { useEffect } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/Profile.module.scss"

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user){ 
    return null;
  }

  const userEmail = user.email;

  return (
    <div className={styles.container}>
      {/* Header profila */}
      <section className={styles.profileHeader}>
        <img
          src={`https://ui-avatars.com/api/?name=${user.email}&background=random`}
          alt="User Avatar"
          className={styles.avatar}
        />
        <h2 className={styles.username}>Dobrodošli, {user.email.split("@")[0]}</h2>
        <p className={styles.subtext}>Drago nam je što ste ponovo ovde 👋</p>
      </section>

      {/* Sekcija informacija */}
      <section className={styles.profileInfo}>
        <div className={styles.dataRow}>
          <strong>Email:</strong> {user.email}
        </div>
        <div className={styles.dataRow}>
          <strong>Lozinka:</strong> {user.getMaskedPassword()}
        </div>
        <div className={styles.dataRow}>
          <strong>Ime i prezime:</strong> {user.email.split("@")[0]}
        </div>
        <div className={styles.dataRow}>
          <strong>Pridružio se:</strong> {new Date().toLocaleDateString()}
        </div>
        <div className={styles.dataRow}>
          <strong>Uloga:</strong> {userEmail === "admin@gmail.com" ? "Admin" : "Regularni korisnik"}
        </div>
      </section>

      {/* Sekcija akcija */}
      <section className={styles.profileActions}>
        <Button
          text="Promeni lozinku"
          onClick={() => alert("Promena lozinke još nije implementirana")}
        />
        <Button
          text="Izmeni profil"
          onClick={() => alert("Izmena profila još nije implementirana")}
        />
        <Button
          text="Idi u Shop"
          onClick={() => navigate("/shop")}
        />
        <Button
          text="Odjavi se"
          className={styles.logoutButton}
          onClick={() => {
            logout();
            navigate("/login");
          }}
        />
      </section>
    </div>
  );
};

export default Profile;