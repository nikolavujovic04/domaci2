import React from "react";
import styles from "../styles/Product.module.scss";
import Button from "./Button";

interface ProductCardProps {
  image: string;
  title: string;
  price?: number;
  rating?: number;
  priceText?: string;
  ratingStars?: string;
  buttonText?: string;
  onOrder?: () => void;
}


const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  priceText,
  ratingStars,
  buttonText = "Poruči",
  onOrder,
}) => {
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
        <div className={styles.rating}>{ratingStars}</div>
        <div className={styles.price}>{priceText}</div>
      </div>
    </div>
  );
};

export default ProductCard;
