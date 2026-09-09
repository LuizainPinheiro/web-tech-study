import React from 'react';
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
    
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul className="social-links-vertical">
            <li><a href={props.githubUrl}>GitHub</a></li>
            <li><a href={props.linkedinUrl}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{props.copyright}</p>
      </div>
    </footer>
  );
}
