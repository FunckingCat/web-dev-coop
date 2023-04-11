import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { type FC } from 'react';

import { type IButtonLinkProps } from './types';
import styles from './button-link.module.scss';

export const ButtonLink: FC<IButtonLinkProps> = ({ className, ...props }) => (
  <Link className={clsx(styles.link, className)} {...props} />
);
