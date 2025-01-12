import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      Header
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" height={30} width={30} />
        </Link>
        <div className="flex items-center gap-5"></div>
      </nav>
    </header>
  );
};

export default Header;
