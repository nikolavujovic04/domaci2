import React from "react";
import clsx from "clsx";
import styles from "../styles/Button.module.scss"

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.btn,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;