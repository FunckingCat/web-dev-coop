import React, { type FC } from 'react';
import { Button as OriginalButton } from 'antd';

import { getFullHref } from '../../utils';
import { type IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ href, children, ...props }) => {
  const fullHref = getFullHref();

  return (
    <OriginalButton href={href && `${fullHref}${href}`} {...props}>
      {children}
    </OriginalButton>
  );
};
