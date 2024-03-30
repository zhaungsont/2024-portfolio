'use client';
import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './ThemeToggleButton.module.scss';
import { useRouter } from 'next/navigation';

let cycles = 1;

export default function ThemeToggleButton() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [clickedTimes, setClickedTimes] = useState(0);
	const router = useRouter();

	const toggleTheme = () => {
		setClickedTimes((prevTimes) => prevTimes + 1);
		setIsDarkTheme(!isDarkTheme);

		document.body.classList.toggle('light-theme');
		document.documentElement.classList.toggle('light-theme');
	};

	if (clickedTimes === 10 * cycles) {
		alert('YEET');
		router.push('/yeet', { scroll: false });
		setClickedTimes(0);
		cycles++;
	}
	return (
		<button
			className={styles.themeButton}
			onClick={toggleTheme}
			aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDarkTheme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
		</button>
	);
}
