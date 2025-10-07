import React from 'react';
import styles from '../styles/WorkSection.module.scss';

interface WorkCardProps {
  image: string;
  title: string;
  subtitle: string;
  details: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ image, title, subtitle, details }) => {
  return (
    <div className={styles.workCard}>
      <img src={image} alt={title} className={styles.workCardImage} />

      <div className={styles.workCardContent}>
        <h3>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>

        {details.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
