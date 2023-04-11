import { type FC } from 'react';
import { useLocation } from 'react-router-dom';

import { Page } from 'widgets';
import { OptionParameters } from './option-parameters';
import { StudentOptionParameters } from './student-option-parameters';

import styles from './student.module.scss';

export const StudentPage: FC = () => {
  const location = useLocation();
  const hasOption = location.pathname.includes('/student/');

  return (
    <Page className={styles.wrapper}>
      {hasOption ? <StudentOptionParameters /> : <OptionParameters />}
    </Page>
  );
};
