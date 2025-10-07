import React from "react";
import { Link } from "react-router-dom";
import Product from "../models/Product";
import burger from "../assets/burger.jpg";
import pancake from "../assets/palacinka.jpg";
import background from "../assets/background.jpg";
import cola from "../assets/cola.jpg";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button";
import WorkSection from "../components/WorkSection";

// Kreiramo instance proizvoda koristeći klasu Product
const CATEGORY_DATA = [
  new Product("Brza Hrana", 5, 4),
  new Product("Pića", 10, 5),
  new Product("Deserti", 7, 4),
];

// Mapa slika po kategorijama
const IMAGE_MAP: { [key: string]: string } = {
  "Brza Hrana": burger,
  "Pića": cola,
  "Deserti": pancake,
};

const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      {/* Hero sekcija */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          src={background}
          alt="Pozadina Foodie"
          className={styles.heroBgImage}
        />
        <div className={styles.heroContent}>
          <h1>Dobrodošli u Foodie</h1>
          <p>Ukusni obroci, pića i deserti na dohvat ruke</p>
          <Link to="/shop">
            <Button text="Istraži Jelovnik" />
          </Link>
        </div>
      </section>

      {/* Kategorije */}
      <section className={styles.categories}>
        <div className={styles.productGrid}>
          {CATEGORY_DATA.map((product, index) => (
            <ProductCard
              key={index}
              image={IMAGE_MAP[product.title]}
              title={product.title}
              priceText={product.getFormattedPrice()}
              ratingStars={product.getRatingStars()}
              buttonText="Poruči"
              onOrder={() => {}}
            />
          ))}
        </div>
      </section>

      {/* O nama */}
      <section className={styles.about}>
        <p>
          Foodie je vaše omiljeno mesto za sočne obroke i osvežavajuća pića. 
          Donosimo ukus, svežinu i kvalitet pravo na vaš sto — bez čekanja. 
          Od sočnih burgera i hrskavih pomfrita do laganih deserata i 
          specijalnih pića, svaki zalogaj je kreiran da zadovolji vašu želju. 
          Poručite sada i uživajte u ukusu brzih, svežih i ukusnih obroka!
        </p>
      </section>

      {/* Slika baner */}
      <section className={styles.imageBanner}>
        <img
          src={burger}
          alt="Ukusna Hrana"
          className={styles.bannerImage}
        />
      </section>
      <WorkSection/>
    </main>
  );
};

export default Home;
