import React from "react";
import { Link } from "react-router-dom";
import Product from "../models/Product";
import burger from "../assets/burger.jpg";
import pancake from "../assets/palacinka.jpg";

// Kreiramo instance proizvoda
const CATEGORY_DATA = [
  new Product("Brza Hrana", 5, 4),
  new Product("Pića", 10, 5),
  new Product("Deserti", 7, 4),
];

// Za slike čuvamo mapu prema title-u
const IMAGE_MAP: { [key: string]: string } = {
  "Brza Hrana": burger,
  "Pića": pancake,
  "Deserti": burger,
};

