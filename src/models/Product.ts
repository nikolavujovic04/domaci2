export default class Product {
  title: string;
  price: number;
  rating: number;

  constructor(title: string, price: number, rating: number) {
    this.title = title;
    this.price = price;
    this.rating = rating;
  }

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  getRatingStars(): string {
    const fullStars = "★".repeat(Math.floor(this.rating));
    const emptyStars = "☆".repeat(5 - Math.floor(this.rating));
    return fullStars + emptyStars;
  }
}