import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '20px',
  textAlign: 'center',
};

const iconStyle = {
  fontSize: '37px',
  color: '#333',
  margin: '0 10px',
  transition: 'color 0.3s ease',
};

const linkStyle = {
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: '10px' }}>
        <a href="https://github.com/sandesh300" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaGithub style={iconStyle} />
        </a>
        <a href="mailto:bhujbalsandesh52@gmail.com" style={linkStyle}>
          <FaEnvelope style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/sandesh-bhujbal-b3a16a222/0o" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
      <p style={{ fontSize: '14px', color: '#777' }}>© {new Date().getFullYear()} Your Weather App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
