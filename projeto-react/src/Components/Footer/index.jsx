import React from 'react';
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="footer-content">
       
        <div className="footer-section">
          <h3>MeuSite</h3>
          <p>Construindo experiências incríveis na web com React.</p>
        </div>
    
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>Início</li>
            <li>Sobre</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul className="social-links-vertical">
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>MeuSite. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
