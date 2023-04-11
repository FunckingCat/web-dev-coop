import { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

import { Container, Logo } from 'shared';
import { type HeaderPropsType } from './types';
import styles from './header.module.scss';
import { Button } from '../../shared/components';
import { PATHS } from '../../config';

export const Header: FC<HeaderPropsType> = ({ className, ...props }) => {
  const { pathname } = useLocation();

  return (
    <header className={clsx(styles.header, className)} {...props}>
      <Container>
        <Logo />
      </Container>
      {pathname !== PATHS.HOME && (
        <Link to={PATHS.HOME}>
          <Button className={styles.btn}>На главную</Button>
        </Link>
      )}
    </header>
  );
};
