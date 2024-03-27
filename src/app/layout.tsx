import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Link from 'next/link';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Michael Chuang',
	description: "Michael Chuang's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				{children}
				<main className={styles.main}>
					<div className={styles.left}>
						<h1>Michael Chuang</h1>
						<h3>Software Engineer</h3>
						<h3>Taipei, Taiwan</h3>
					</div>
					<div className={styles.right}>
						<Link href="/about">About</Link>
						<Link href="/experience">Experience</Link>
						<Link href="/resume">Resume</Link>
						<Link href="https://blog.zhsont.cc/">Blog</Link>
					</div>
				</main>
			</body>
		</html>
	);
}
