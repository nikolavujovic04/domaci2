// src/components/WorkSection.tsx
import React from 'react';
import styles from '../styles/Worksection.module.scss';
import WorkCard from './WorkCard';
import img1 from '../assets/burger.jpg';
import img2 from '../assets/jaja.jpg';
import img3 from '../assets/palacinka.jpg';

const WorkSection: React.FC = () => {
  const cards = [
    {
      image: img1,
      title: 'Kupac 1',
      subtitle: 'Trgovina',
      details: [
        '„Hrana je bila izvanredna, sveže i ukusno!“',
        '„Brza dostava i ljubazno osoblje. Toplo preporučujem.“',
        '„Ambijent i prezentacija proizvoda su odlični.“',
        '„Osećam se kao kod kuće svaki put kada naručim.“',
      ],
    },
    {
      image: img2,
      title: 'Kupac 2',
      subtitle: 'Trgovina',
      details: [
        '„Odličan izbor pića i deserata, sve je sveže.“',
        '„Servis je brzi i profesionalan.“',
        '„Cene su fer, a porcije zadovoljavaju.“',
        '„Definitivno ću se vratiti ponovo.“',
      ],
    },
    {
      image: img3,
      title: 'Kupac 3',
      subtitle: 'Trgovina',
      details: [
        '„Najbolji burger koji sam ikada probao!“',
        '„Ljubazno osoblje i uredna prodavnica.“',
        '„Sve je lepo upakovano i stiglo na vreme.“',
        '„Preporučujem svim prijateljima i porodici.“',
      ],
    },
  ];

  return (
    <section className={styles.workSection}>
      <div className={styles.workText}>
        <h2>Naš Rad</h2>
        <p>
         Ovo je naš rad – ovde možete pogledati neke od naših pažljivo pripremljenih jela,
          osvežavajućih pića i slatkih deserata, zajedno sa utiscima i iskustvima naših
           zadovoljnih kupaca. Svaki projekat i svaka porudžbina predstavljaju posvećenost
            kvalitetu, svežini i ukusu, a naši kupci često ističu kako im naši proizvodi donose
             radost, zadovoljstvo i nezaboravne gastronomske trenutke.
        </p>
      </div>
      <div className={styles.workCards}>
        {cards.map((card, index) => (
          <WorkCard
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            details={card.details}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
