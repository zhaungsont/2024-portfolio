import React from 'react';

import styles from './page.module.scss';
import Link from 'next/link';
import SubPage from '@/app/ui/SubPage/SubPage';
import { Inter, Fira_Mono } from 'next/font/google';
import ExternalLink from '@/components/ExternalLink/ExternalLink';

export default function About() {
	return (
		<section className={styles.about}>
			<SubPage>
				<h1 className={styles.title}>About</h1>
				<p className={styles.bio}>
					<strong>Michael Chuang</strong> is a dedicated software engineer based
					in Taipei, Taiwan, with a keen focus on technical excellence and best
					practices. With a solid foundation in both large and small
					organizations, he brings two years of valuable experience to the
					table.
				</p>
				<p className={styles.bio}>
					Michael&apos;s expertise lies in the front-end ecosystem, where he
					specializes in TypeScript, React, Redux, and Node.js. He is also
					proficient in Python, unit testing, and continuous integration and
					deployment (CI/CD) practices.
				</p>
				<p className={styles.bio}>
					His areas of interest extend to cybersecurity, game AI, and
					automation, reflecting his passion for leveraging technology to solve
					complex challenges.
				</p>
				<div className={styles.additionalLinks}>
					<ExternalLink href="https://github.com/zhaungsont/hide-teams-overlay">
						GitHub
					</ExternalLink>
					<br />
					<ExternalLink href="https://github.com/zhaungsont/hide-teams-overlay">
						LinkedIn
					</ExternalLink>
					<br />
					<br />
					...or add me on{' '}
					<ExternalLink href="https://github.com/zhaungsont/hide-teams-overlay">
						Discord
					</ExternalLink>
					<br />
				</div>
			</SubPage>
		</section>
	);
}
