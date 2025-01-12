import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AsyncFormButton from './async-form-button';
import UnderLine from './ui/underline';

const Header = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-[#095ee2]"
        >
          <Image src="/logo.png" height={15} width={25} alt="VidSpark logo" />
          VidSpark
        </Link>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <AsyncFormButton
                action={async () => {
                  'use server';
                  await signOut({ redirect: '/' });
                }}
              >
                Logout
              </AsyncFormButton>
              <Link href={`/user/${session?.id}`}>{session?.user?.name}</Link>
            </>
          ) : (
            <AsyncFormButton
              action={async () => {
                'use server';
                await signIn();
              }}
            >
              Login
            </AsyncFormButton>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
