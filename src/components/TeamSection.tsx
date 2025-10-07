// src/components/TeamSection.tsx
import React from 'react';
import styles from '../styles/TeamSection.module.scss';
import TeamMember from './TeamMember';

import member1Image from '../assets/team-member.jpg';
import member2Image from '../assets/member2.jpeg';
import member3Image from '../assets/member3.jpg';
import member4Image from '../assets/member4.jpg';

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
}

const team: TeamMemberData[] = [
  { name: 'Johnny Walker', role: 'Web Dizajner', image: member1Image },
  { name: 'Kai Flex', role: 'Podrška', image: member2Image },
  { name: 'Sarah Ringo', role: 'Šef', image: member3Image },
  { name: 'Kate Smith', role: 'Kuvar', image: member4Image },
];

const TeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>NAŠ TIM</h2>
      <p className={styles.subtitle}>
        Upoznajte naš tim – naši kako kancelarijski tako i kuvar majstori koji sa ljubavlju i posvećenošću stvaraju najbolje iskustvo za naše kupce.
      </p>
      <div className={styles.teamMembers}>
        {team.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
