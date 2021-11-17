import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer className='footer-footer' data-testid='footer'>
          <address className='address-footer' data-testid='author'>
              Tomasz Adamczyk
          </address>
      </footer>
    );
};

export default Footer;
