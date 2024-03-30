import Link from 'next/link';
import styles from './page.module.scss';
import Image from 'next/image';
import SubPage from '@/app/ui/SubPage/SubPage';

export default function Custom404() {
	return (
		<div className={`${styles.custom404}`}>
			<SubPage>
				<div className={styles.content}>
					<h1>404 - Page Not Found</h1>
					<div className={styles.image}>
						<Image
							src="/images/shock-black-dude.JPG"
							alt="Shocked black dude meme"
							width={300}
							height={300}
						/>
					</div>
					<Link href="/">(Go home)</Link>
				</div>
			</SubPage>
		</div>
	);
}
