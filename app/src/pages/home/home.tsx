import { type FC } from 'react';

import { Page } from 'widgets';
import { PATHS } from 'config';
import { Button } from '../../shared/components';

import styles from './home.module.scss';

export const HomePage: FC = () => (
  <Page className={styles.wrapper}>
    <div className={styles.links}>
      <Button href={PATHS.ABOUT}>О программе</Button>
      <Button href={PATHS.TASKS}>Сгенерировать вариант</Button>
      <Button href={PATHS.STUDENT}>Сгенерировать задание</Button>
    </div>
  </Page>
);
