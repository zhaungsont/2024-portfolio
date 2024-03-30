import React from 'react';

import styles from './SubPage.module.scss';
import Link from 'next/link';
import { Fira_Mono } from 'next/font/google';

import { BsArrowLeftCircle } from 'react-icons/bs';

const firaMono = Fira_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default function SubPage({
	children,
	title,
}: {
	children: React.ReactNode;
	title?: string;
}) {
	return (
		<div className={`${styles.subPage} subPage`}>
			<div className={styles.wrapper}>
				<Link className={styles.goBack} href="/">
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
