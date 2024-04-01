import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import styles from './ExternalLink.module.scss';

export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      target="_blank"
      href={href}
      className={styles.externalLink}
      rel="noreferrer"
    >
      {children}
      <FiExternalLink />
    </a>
  );
}
