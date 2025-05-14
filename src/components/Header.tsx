import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <Link href="/" className={pathname === '/' ? 'is-active' : ''}>
        SSR Query
      </Link>

      <Link
        href="/client-only"
        className={pathname === '/client-only' ? 'is-active' : ''}
      >
        Client-Only Query
      </Link>

      <Link
        href="/non-query-ssr"
        className={pathname === '/client-only' ? 'is-active' : ''}
      >
        SSR Non Query
      </Link>


      <style jsx>{`
        header {
          display: flex;
          gap: 16px;
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};
