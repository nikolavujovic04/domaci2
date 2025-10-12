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
import cokocake from "../assets/cokoladnikolac.webp";
import coctail from "../assets/koktel2.jpeg";
import macaroni from "../assets/makaroniBre.webp";
import nudles from "../assets/nudleNove.webp";
import cheese from "../assets/pohovani kackavalj.jpeg";
import fries from "../assets/pomfrit.avif";
import cakeSt from "../assets/jagodica.webp";
import cookies from "../assets/kolacici.webp";
import vine from "../assets/vino.jpg";
import maffines from "../assets/mafini.jpeg";

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
  "Spagete",
  "Torta",
  "Pivo",
  "Gazirani sokovi",
  "Jaja",
  "Coca cola",
  "Voda",
  "Cokoladni kolac",
  "Koktel",
  "Makarone",
  "Nudle",
  "Vino",
  "Pomfrit",
  "Pohovani kackavalj",
  "Vocna torta",
  "Kolacici",
  "Mafini"
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
  cokocake,
  coctail,
  macaroni,
  nudles,
  vine,
  fries,
  cheese,
  cakeSt,
  cookies,
  maffines
];

const categories: ("Brza hrana" | "Pica" | "Deserti")[] = [
  "Brza hrana",   
  "Deserti",      
  "Brza hrana",  
  "Brza hrana",   
  "Deserti",      
  "Pica",       
  "Pica",        
  "Brza hrana",  
  "Pica",        
  "Pica",         
  "Deserti",     
  "Pica",         
  "Brza hrana",  
  "Brza hrana",  
  "Pica",         
  "Brza hrana",  
  "Brza hrana",  
  "Deserti",     
  "Deserti",      
  "Deserti"     
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