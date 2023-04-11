import { type FC } from 'react';
import { Slider, Typography } from 'antd';

import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import { type AppStateType } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from 'store/task';
import { selectedTasksSelector, taskSelector } from 'store/task/selectors';

import { Page } from 'widgets';
import { PATHS, TASKS_CONFIGURATION } from 'config';
import { Button, MathText } from 'shared/components';

import { useParams } from 'react-router-dom';
import styles from './professor.module.scss';
import { type ITemplateProps } from './types';

const { Title, Text } = Typography;

export const ProfessorPage: FC = () => {
  const { option } = useParams<{ option: string }>();
  const section = TASKS_CONFIGURATION.find((sectionItem) => sectionItem.section === option);
  const tasksSelector = useSelector(selectedTasksSelector);

  const isTasksPicked = !tasksSelector.length;
  return (
    <Page className={styles.wrapper}>
      <div className={styles.section}>
        <Title level={3} className={styles.sectionName}>
          {section?.section_name}
        </Title>
        {section?.templates.map((template) => <Template key={template.id} template={template} />)}
      </div>
      <Button type="primary" href={PATHS.QR} disabled={isTasksPicked}>Сгенерировать код варианта</Button>
    </Page>
  );
};

const Template: FC<ITemplateProps> = ({ template, ...props }) => {
  const dispatch = useDispatch();
  const state = useSelector((appState: AppStateType) => appState);
  const task = taskSelector(state, template.id);

  const handleChange = (newValue: number) => {
    if (newValue === 0) {
      dispatch(taskActions.removeTask({ id: template.id }));
      return;
    }
    dispatch(taskActions.editSelectedTask({
      id: template.id,
      amount: newValue
    }));
  };

  return (
    <div className={styles.template} {...props}>
      <MathText type="secondary">{template.name}</MathText>
      <div className={styles.templateContainer}>
        <BlockMath>{template.view}</BlockMath>
        <div className={styles.templatePreview}>
          <BlockMath>{template.template}</BlockMath>
        </div>
        <div className={styles.slider}>
          <Text className={styles.templateAmount}>{ task?.amount ?? 0 }</Text>
          <Slider
            className={styles.templateSlider}
            value={task?.amount}
            onChange={(newValue) => { handleChange(newValue); }}
            max={10}
          />
        </div>
      </div>
    </div>
  );
};
