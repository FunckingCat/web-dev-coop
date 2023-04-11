import { type FC } from 'react';
import { Button, Typography } from 'antd';

import { Page } from 'widgets';

import { TASKS_CONFIGURATION } from 'config/tasksConfiguration';
import { taskActions } from 'store/task';
import { useDispatch } from 'react-redux';
import { PATHS } from 'config';
import { useNavigate } from 'react-router-dom';
import styles from './tasks.module.scss';

const sections =
    TASKS_CONFIGURATION.map((task, index) => ({ id: index, value: task.section, label: task.section_name }));

export const TasksPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (section: string) => {
    dispatch(taskActions.clearTasks());
    navigate(`${PATHS.PROFESSOR}/${section}`);
  };

  return (
    <Page className={styles.wrapper}>
      <div className={styles.tasks}>
        {
          sections.map((section) => (
            <Button onClick={() => { handleClick(section.value); }} key={section.id}>
              {section.label}
            </Button>
          ))
        }
      </div>
    </Page>
  );
};
