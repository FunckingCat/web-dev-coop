import { type FC } from 'react';
import { Typography } from 'antd';

import { Button } from 'shared/components';
import { PATHS } from 'config';

import { type IErrorPageProps } from './types';

export const Error: FC<IErrorPageProps> = ({ message, redirect = PATHS.HOME, ...props }) => (
  <div {...props}>
    <Typography.Title type="danger">{message}</Typography.Title>
    <Button type="primary" danger href={redirect}>Вернуться назад</Button>
  </div>
);
