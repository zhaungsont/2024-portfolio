import React from 'react';

import styles from './page.module.scss';
import Link from 'next/link';

export default function About() {
	return (
		<div className={`${styles.about} subpage`}>
			<h1>About</h1>
			<Link href="/">Home</Link>
		</div>
	);
}
