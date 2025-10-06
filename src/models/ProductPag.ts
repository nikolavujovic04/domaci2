import burger from "../assets/burger.jpg";
import pancake from "../assets/palacinka.jpg";
import pizza from "../assets/pizza.jpg";
import pasta from "../assets/pasta.jpg";
import cake from "../assets/cake.jpg";
import beer from "../assets/beer.jpeg";
import soda from "../assets/soda.jpg";
import eggs from "../assets/eggs.jpg";
import cola from "../assets/cola.jpg";
import water from "../assets/water.jpg";

export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: "Brza hrana" | "Pica" | "Deserti";
}

const productTitles = [
  "Burger",
  "Palacinke",
  "Pica",
  "Palacinke",
  "Torta",
  "Pivo",
  "Gazirani sokovi",
  "Jaja",
  "Koka kola",
  "Voda",
];

// Niz svih slika
const productImages = [
  burger,
  pancake,
  pizza,
  pasta,
  cake,
  beer,
  soda,
  eggs,
  cola,
  water,
];

const categories: ("Brza hrana" | "Pica" | "Deserti")[] = [
  "Brza hrana",
  "Deserti",
  "Brza hrana",
  "Deserti",
  "Deserti",
  "Pica",
  "Pica",
  "Brza hrana",
  "Pica",
  "Pica",
];

// Kreiranje proizvoda — kombinujemo title i image po indeksu
export const PRODUCTS: Product[] = Array.from({ length: 20 }, (_, i) => {
  const index = i % productTitles.length;

  return {
    id: i + 1,
    title: productTitles[index],
    price: 5 + (i % 5),
    rating: ((i + 1) % 5) + 1,
    image: productImages[index],
    category: categories[index],
  };
});