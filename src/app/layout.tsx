import type { Metadata } from 'next';
import { Inter, Fira_Mono } from 'next/font/google';
import './globals.scss';
import Link from 'next/link';
import styles from './page.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggleButton from '@/components/ThemeToggleButton/ThemeToggleButton.client';
import ExternalLink from '@/components/ExternalLink/ExternalLink';

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

const toggleTheme = () => {
	document.body.classList.toggle('light-theme');
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
							<a target="_blank" href="https://github.com/zhaungsont">
								<FaGithub />
							</a>
							<a target="_blank" href="https://www.linkedin.com/in/zhsont/">
								<FaLinkedin />
							</a>
						</div>
					</div>
					<div className={`${firaMono.className} ${styles.pageLinks}`}>
						<Link href="/about">About</Link>
						<Link href="/experience">Experience</Link>
						<Link href="/resume">Resume</Link>
						<ExternalLink href="https://blog.zhsont.cc/">Blog</ExternalLink>
					</div>
				</main>
			</body>
		</html>
	);
}
