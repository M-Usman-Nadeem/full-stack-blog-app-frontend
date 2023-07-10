import React, { useEffect, useState } from 'react';

function Footer() {
  // const [location,setLocation]=useState(null)
  // ${location=='/write'&& 'absolute bottom-0 right-0 left-0'}
  return (
    <footer className={`bg-blue-200 py-4 `}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-white">Blog Website</p>
      </div>
    </footer>
  );
}

export default Footer;
