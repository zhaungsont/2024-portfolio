import React from 'react';

import styles from './SubPage.module.scss';
import Link from 'next/link';

import { BsArrowLeftCircle } from 'react-icons/bs';

export default function Subpage({ children }: { children: React.ReactNode }) {
	return (
		<div className={`${styles.subPage} subPage`}>
			<Link className={styles.goBack} href="/">
				<BsArrowLeftCircle />
			</Link>
			{children}
		</div>
	);
}
