import React from 'react';

import styles from './page.module.scss';
import Link from 'next/link';

export default function Card() {
	return (
		<div className={styles.test}>
			<h1>About</h1>
			<Link href="/">Home</Link>
		</div>
	);
}
