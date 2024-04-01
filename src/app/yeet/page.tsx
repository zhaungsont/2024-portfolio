import React from 'react';

import Image from 'next/image';

import SubPage from '@/app/ui/SubPage/SubPage';

export default function Yeet() {
  return (
    <SubPage>
      <Image src="/images/elmo-flame.gif" alt="Elmo on fire" fill />
    </SubPage>
  );
}
