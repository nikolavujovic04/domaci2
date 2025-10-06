import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { PRODUCTS, type Product } from "../models/ProductPag";
const ITEMS_PER_PAGE = 6;

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  const checkPrice = (price: number) => {
    if (priceFilter === "<5") return price < 5;
    if (priceFilter === "5-10") return price >= 5 && price <= 10;
    if (priceFilter === ">10") return price > 10;
    return true;
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
    const matchesPrice = checkPrice(product.price);
    const matchesRating = ratingFilter === "All" || product.rating >= Number(ratingFilter);
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
};

export default Shop;