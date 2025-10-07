import React from 'react';
import styles from '../styles/TeamSection.module.scss';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className={styles.teamMember}>
      <img src={image} alt={name} className={styles.teamMemberImage} />
      <h3 className={styles.teamMemberName}>{name}</h3>
      <p className={styles.teamMemberRole}>{role}</p>
    </div>
  );
};

export default TeamMember;
