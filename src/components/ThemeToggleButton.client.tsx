'use client';
import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import styles from './ThemeToggleButton.module.scss';

export default function ThemeToggleButton() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);

		document.body.classList.toggle('dark-theme');
		document.documentElement.classList.toggle('dark-theme');
	};

	return (
		<button
			className={styles.themeButton}
			onClick={toggleTheme}
			aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDarkTheme ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
		</button>
	);
}
