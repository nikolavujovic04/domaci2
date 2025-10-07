export interface IProduct {
  title: string;
  price: number;
  rating: number;
  getFormattedPrice(): string;
  getRatingStars(): string;
}