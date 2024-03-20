// pages/404.tsx

import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link href="/">
        <a style={{ color: '#0070f3', textDecoration: 'none' }}>Go back home</a>
      </Link>
    </div>
  );
};

export default Custom404;
