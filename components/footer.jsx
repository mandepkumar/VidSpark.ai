import Link from 'next/link';
import React from 'react';
import UnderLine from './ui/underline';

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-600\">
        <p>
          Made with ❣️ by{' '}
          <Link
            href="https://github.com/mandepkumar"
            className="font-bold text-[#f92f60]"
          >
            <UnderLine underLineColor="[#f92f60]">MK</UnderLine>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
