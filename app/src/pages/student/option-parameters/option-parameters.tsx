import { Input } from 'antd';
import { type FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student';
import { SHA512 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { decodeTasks } from '../../../store/utils/decode-tasks';
import { Button } from '../../../shared/components';
import { PATHS } from '../../../config';

import styles from './option-parameters.module.scss';

export const OptionParameters: FC = () => {
  const [name, setUsername] = useState('');
  const [hash, setHash] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const isButtonDisabled = !name || !hash;

  return (
    <>
      <p>
        Введите пожалуйста свою фамилию, имя и группу; код преподавателя
      </p>
      <div className={styles.sectionValue}>
        <Input
          className={styles.inputOption}
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={name}
          placeholder="Иванов Иван 211-321"
        />
        <Input
          className={styles.inputOption}
          type="text"
          onChange={(e) => {
            setHash(e.target.value);
          }}
          value={hash}
          placeholder="************"
        />
        <Button
          type="primary"
          className={styles.button}
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          Создать
        </Button>
      </div>
    </>
  );
};
