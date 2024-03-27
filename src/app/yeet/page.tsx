import React from 'react';
import SubPage from '@/app/ui/SubPage/SubPage';
import Image from 'next/image';

export default function Yeet() {
	return (
		<SubPage>
			<Image src="/images/elmo-flame.gif" alt="Elmo on fire" fill={true} />
		</SubPage>
	);
}
