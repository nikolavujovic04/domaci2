import React from "react";
import styles from "../styles/Product.module.scss";
import Button from "./Button";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  buttonText?: string;
  onOrder?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  rating,
  buttonText = "Poruči",
  onOrder,
}) => {
  const validRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className={styles.productCard}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.img} />
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <Button
        text={buttonText}
        onClick={onOrder}
        className={styles.btnOrder}
        variant="primary"
      />
      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < validRating ? styles.starFilled : styles.starEmpty}
              aria-label={i < validRating ? "popunjena zvezda" : "prazna zvezda"}
            >
              {i < validRating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className={styles.price}>{price.toFixed(2)} €</div>
      </div>
    </div>
  );
};

export default ProductCard;