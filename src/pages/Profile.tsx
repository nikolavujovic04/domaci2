import React, { useEffect } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  const userEmail = user.email;


  
}