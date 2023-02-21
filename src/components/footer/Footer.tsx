import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="credit">
        <p>
          Copyright {year} - developed by{' '}
          <a
            href="https://techieemma.tech"
            target="_blank"
            rel="noreferrer noopener"
          >
            Techie Emma
          </a>{' '}
          | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
