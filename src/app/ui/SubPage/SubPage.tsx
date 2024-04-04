import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

import { Fira_Mono } from 'next/font/google';
import Link from 'next/link';

import styles from './SubPage.module.scss';

const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function SubPage({
  children,
  title,
  backPath,
}: {
  children: React.ReactNode;
  title?: string;
  backPath?: string;
}) {
  return (
    <div className={`${styles.subPage} subPage`}>
      <div className={styles.wrapper}>
        <Link className={styles.goBack} href={backPath ?? '/'}>
          <BsArrowLeftCircle />
        </Link>
        {title && (
          <h1 className={`${styles.title} ${firaMono.className}`}>{title}</h1>
        )}

        {children}
      </div>
    </div>
  );
}
