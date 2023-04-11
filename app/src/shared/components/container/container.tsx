import React, { type FC } from 'react';
import { clsx } from 'clsx';

import { type ContainerPropsType } from './types';
import styles from './container.module.scss';

export const Container: FC<ContainerPropsType> = ({ className, children, ...props }) => (
  <div className={clsx(styles.container, className)} {...props}>
    {children}
  </div>
);
