// app/about/About.tsx

"use client"; // Komponent klientowy

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AboutSection = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About the Application</h1>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          Our application is a platform that allows users to report and track threats such as natural disasters, fires, floods, and manage critical resources during a crisis. It operates on a community basis, where users can report threats, confirm them, and share information about available resources such as water, food, medicine, and life-saving equipment.
        </p>
        <h2 style={styles.subheader}>Application Features</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>User and moderator registration</li>
          <li style={styles.listItem}>Reporting threats and assigning them to regions</li>
          <li style={styles.listItem}>Managing critical resources</li>
          <li style={styles.listItem}>Interactive threat map with filters</li>
          <li style={styles.listItem}>Moderator role for overseeing content and reports</li>
        </ul>
        <h2 style={styles.subheader}>Security and Trust</h2>
        <p style={styles.paragraph}>
          The application provides mechanisms for confirming threat reports by other users, which allows for assessing the importance of the alert and the credibility of the reported resources. The system for blocking false information and managing reports is crucial for ensuring the safety of all users.
        </p>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How does the application work?</Accordion.Header>
            <Accordion.Body>
              The application operates based on user reports, who can add information about threats and available resources. Moderators verify reports to ensure their credibility.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I report a threat?</Accordion.Header>
            <Accordion.Body>
              To report a threat, you need to register in the application and then fill out the report form, providing details about the threat and its location.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How can I become a moderator?</Accordion.Header>
            <Accordion.Body>
              Moderators are selected from active users who have demonstrated reliability and commitment. To become a moderator, you need to contact the application administrator.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    color: '#2C2F33',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'left',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
  },
  subheader: {
    fontSize: '1.8rem',
    color: '#2C2F33',
    fontWeight: '600',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
  },
};

export default AboutSection;
