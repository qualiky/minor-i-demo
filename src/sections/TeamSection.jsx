import React from "react";
import styles from "./TeamSection.module.css"; // Will create this CSS module

// Placeholder team member data
const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Founder",
    photo: "https://via.placeholder.com/150?text=Jane+Doe",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Lead Vet",
    photo: "https://via.placeholder.com/150?text=John+Smith",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Adoption Coordinator",
    photo: "https://via.placeholder.com/150?text=Emily+J",
  },
  {
    id: 4,
    name: "David Lee",
    role: "Volunteer Manager",
    photo: "https://via.placeholder.com/150?text=David+L",
  },
];

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <h2>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamMemberCard}>
            <img
              src={member.photo}
              alt={`Photo of ${member.name}`}
              className={styles.memberPhoto}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
