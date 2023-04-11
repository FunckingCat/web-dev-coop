import { Input } from 'antd';
import { type FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student/slice';
import { SHA512 } from 'crypto-js';
import { decodeTasks } from 'store/utils/decode-tasks';

import { Button } from 'shared/components';
import { PATHS } from 'config';

import styles from './student-option-parameters.module.scss';

export const StudentOptionParameters: FC = () => {
  const [name, setUsername] = useState('');
  const [hash, setHash] = useState('');

  const dispatch = useDispatch();
  const { option } = useParams<{ option: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (option) {
      setHash(option);
    }
  }, [option]);

  const handleClick = () => {
    const hashedName = SHA512(name).toString();
    const decodedTasks = decodeTasks(hash);
    if (decodedTasks.length > 0) {
      dispatch(studentActions.addInfo({
        hash,
        name,
        userHash: hashedName,
        tasks: decodedTasks
      }));
      navigate(PATHS.OPTION);
    }
  };

  const isButtonDisabled = !name;
  return (
    <>
      <p>
        Введите пожалуйста свою фамилию, имя и группу
      </p>
      <div className={styles.sectionValue}>
        <Input
          className={styles.inputOption}
          type="text"
          onChange={(e) => { setUsername(e.target.value); }}
          value={name}
          placeholder="Иванов Иван 211-321"
        />
        <Button
          type="primary"
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          Создать
        </Button>
      </div>
    </>
  );
};
