import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import styles from './ExternalLink.module.scss';

export default function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      target="_blank"
      href={href}
      className={`${styles.externalLink} ${className}`}
      rel="noreferrer"
    >
      {children}
      <FiExternalLink />
    </a>
  );
}
