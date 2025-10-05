import React, { useState } from "react";
import styles from "../styles/Gallery.module.scss";
import img1 from "../assets/team-member.jpg";
import img2 from "../assets/member2.jpeg";
import img3 from "../assets/member3.jpg";
import img4 from "../assets/burger.jpg";
import img5 from "../assets/beer.jpeg";
import img6 from "../assets/cake.jpg";
import img7 from "../assets/cola.jpg";
import img8 from "../assets/eggs.jpg";
import img9 from "../assets/pasta.jpg";
import img10 from "../assets/pizza.jpg";

const GALLERY_IMAGES = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
];

const ITEMS_PER_PAGE = 6;

const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const totalPages = Math.ceil(GALLERY_IMAGES.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = GALLERY_IMAGES.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openModal = (img: string) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Galerija</h2>

      {/* GRID GALERIJA */}
      <div className={styles.grid}>
        {currentImages.map((img, idx) => (
          <img
            key={startIndex + idx}
            src={img}
            alt={`Slika galerije ${startIndex + idx + 1}`}
            className={styles.image}
            onClick={() => openModal(img)}
          />
        ))}
      </div>

      {/* PAGINACIJA */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          ◀ Prethodna
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={currentPage === idx + 1 ? styles.activePage : ""}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Sledeća ▶
        </button>
      </div>

      {/* MODAL */}
      {modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Uvećana slika" className={styles.modalImage} />
            <button className={styles.closeButton} onClick={closeModal}>×</button>
          </div>
        </div>
      )}
      </section>
  );
};
export default Gallery;
