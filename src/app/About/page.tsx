import React from 'react';

import styles from './page.module.scss';
import Link from 'next/link';
import SubPage from '@/app/ui/SubPage/SubPage';
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function About() {
	return (
		<SubPage>
			<h1 className={styles.title}>Some Page</h1>
		</SubPage>
		// <div className={`${styles.about} subpage`}>
		// 	<Link className={styles.goBack} href="/">
		// 		<BsArrowLeftCircle />
		// 	</Link>
		// 	<h1 className={styles.title}>Some Page</h1>
		// </div>
	);
}
