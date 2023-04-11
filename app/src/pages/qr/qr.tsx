import { type FC } from 'react';
import { QRCode, Typography } from 'antd';

import { Error, Page } from 'widgets';
import { PATHS } from 'config';
import { Button } from 'shared/components';
import { generateHash } from 'store/utils';
import { getFullHref } from 'shared/utils';

import { useNavigate } from 'react-router-dom';
import styles from './qr.module.scss';

export const QRPage: FC = () => {
  const hash = generateHash();
  const navigate = useNavigate();

  const renderQR = () => {
    if (!hash) {
      return null;
    }

    const fullHref = getFullHref();
    const optionPath = `${PATHS.STUDENT}/${hash}`;
    const totalPath = `${fullHref}${optionPath}`;

    return (
      <div className={styles.qr}>
        <div>
          Код варианта:
          {hash}
        </div>
        <QRCode value={totalPath} size={250} />
        <Button href={optionPath}>
          Перейти к  варианту
        </Button>
        <div className={styles.pathButtons}>
          <Button onClick={() => { navigate(-1); }}>
            Назад
          </Button>
          <Button href={PATHS.TASKS}>
            Вернуться к секциям
          </Button>
        </div>
      </div>
    );
  };

  const renderError = () => {
    if (hash) {
      return null;
    }

    return (
      <Error
        message="Кажется, что вы не выбрали ни одного примера"
        redirect={PATHS.PROFESSOR}
      />
    );
  };

  return (
    <Page className={styles.wrapper}>
      {renderQR()}
      {renderError()}
    </Page>
  );
};
