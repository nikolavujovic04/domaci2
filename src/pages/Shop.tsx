import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import {
  PRODUCTS as PRODUCT_DATA,
  type Product as IProductData,
} from "../models/ProductPag";
import Product from "../models/Product"; // klasa sa metodama
import styles from "../styles/Shop.module.scss";

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

  // Kreiramo instance klase Product iz običnih objekata
  const products: Product[] = PRODUCT_DATA.map(
    (p) => new Product(p.title, p.price, p.rating)
  );

  const filteredProducts = PRODUCT_DATA.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
    const matchesPrice = checkPrice(p.price);
    const matchesRating = ratingFilter === "All" || p.rating >= Number(ratingFilter);
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

  return (
    <section className={styles.shop}>
      <h2 className={styles.title}>Naši proizvodi</h2>

      <input
        type="text"
        placeholder="Pretraži proizvode..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />

      {/* Filteri */}
      <div className={styles.filters}>
        {/* Kategorije */}
        <div className={styles.filterColumn}>
          <span>Kategorija:</span>
          <div className={styles.buttonRow}>
            {[
              { label: "Sve", value: "All" },
              { label: "Brza hrana", value: "Brza hrana" },
              { label: "Pica", value: "Pica" },
              { label: "Deserti", value: "Deserti" },
            ].map((nbr) => (
              <Button
                key={nbr.value}
                text={nbr.label}
                onClick={() => {
                  setCategoryFilter(nbr.value);
                  setCurrentPage(1);
                }}
                className={categoryFilter === nbr.value ? styles.activeFilter : ""}
              />
            ))}
          </div>
        </div>

        {/* Cena */}
        <div className={styles.filterColumn}>
          <span>Cena:</span>
          <div className={styles.buttonRow}>
            {[
              { label: "Sve", value: "All" },
              { label: "<5", value: "<5" },
              { label: "5-10", value: "5-10" },
              { label: ">10", value: ">10" },
            ].map((price) => (
              <Button
                key={price.value}
                text={price.label}
                onClick={() => {
                  setPriceFilter(price.value);
                  setCurrentPage(1);
                }}
                className={priceFilter === price.value ? styles.activeFilter : ""}
              />
            ))}
          </div>
        </div>

        {/* Ocena */}
        <div className={styles.filterColumn}>
          <span>Ocena:</span>
          <div className={styles.buttonRow}>
            {[
              { label: "Sve", value: "All" },
              { label: "5+", value: "5" },
              { label: "4+", value: "4" },
              { label: "3+", value: "3" },
              { label: "2+", value: "2" },
            ].map((rating) => (
              <Button
                key={rating.value}
                text={rating.label}
                onClick={() => {
                  setRatingFilter(rating.value);
                  setCurrentPage(1);
                }}
                className={ratingFilter === rating.value ? styles.activeFilter : ""}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid proizvoda */}
      <div className={styles.grid}>
        {currentProducts.length > 0 ? (
          currentProducts.map((p, idx) => {
            const product = new Product(p.title, p.price, p.rating);
            return (
              <ProductCard
                key={p.id}
                image={p.image}
                title={product.title}
                priceText={product.getFormattedPrice()}
                ratingStars={product.getRatingStars()}
                buttonText="Poruči"
                onOrder={() => console.log(`Poručujem ${product.title}`)}
              />
            );
          })
        ) : (
          <p>Nema proizvoda.</p>
        )}
      </div>

      {/* Paginacija */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Button
            text="◀ Prethodna"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, idx) => (
            <Button
              key={idx}
              text={`${idx + 1}`}
              onClick={() => handlePageChange(idx + 1)}
              className={currentPage === idx + 1 ? styles.activePage : ""}
            />
          ))}
          <Button
            text="Sledeća ▶"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </div>
      )}
    </section>
  );
};

export default Shop;
