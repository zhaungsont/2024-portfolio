import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Inter, Fira_Mono } from 'next/font/google';
import Link from 'next/link';

import ExternalLink from '@/app/components/ExternalLink/ExternalLink';
import ThemeToggleButton from '@/app/components/ThemeToggleButton/ThemeToggleButton.client';

import type { Metadata } from 'next';

import './globals.scss';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });
const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
export const metadata: Metadata = {
  title: 'Michael Chuang',
  description: "Michael Chuang's personal website",
  keywords: ['personal website', 'portfolio', 'software engineer'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <ThemeToggleButton />

        {children}
        <main className={`${styles.main} homepage`}>
          <div className={styles.personalInfo}>
            <h1>Michael Chuang</h1>
            <h3>Software Engineer</h3>
            <h3>Taipei, Taiwan</h3>
            <div className={styles.links}>
              <a
                target="_blank"
                href="https://github.com/zhaungsont"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/zhsont/"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={`${firaMono.className} ${styles.pageLinks}`}>
            <Link href="/about">about</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/blog">Blog</Link>
            <ExternalLink href="https://blog.zhsont.cc/">Blog</ExternalLink>
          </div>
        </main>
      </body>
    </html>
  );
}
