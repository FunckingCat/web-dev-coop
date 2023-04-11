import { Link } from 'react-router-dom';
import { type FC } from 'react';

import { PATHS, PROJECT_INFO } from 'config';
import logo from 'assets/images/logo2.jpg';

import { type LogoPropsType } from './types';
import styles from './logo.module.scss';

export const Logo: FC<LogoPropsType> = ({ ...props }) => (
  <Link to={PATHS.HOME} className={styles.wrapper}>
    <img src={logo} alt="Логотип" {...props} width={65} />
    <b className={styles.caption}>{PROJECT_INFO.NAME}</b>
  </Link>
);
