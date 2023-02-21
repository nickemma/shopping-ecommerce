import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

const NotFound: React.FC = () => {
  return (
    <div style={{ paddingTop: '6rem', textAlign: 'center' }}>
      <p style={{ fontSize: '3rem', fontWeight: '400' }}>
        404 Error - Page not found
      </p>
      <Link
        to="/"
        style={{
          fontSize: '2rem',
          color: 'coral',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <ArrowLeft size={32} />
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
