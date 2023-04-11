import { type FC, useMemo } from 'react';
import { InlineMath } from 'react-katex';
import { Typography } from 'antd';

import { type IMathTextProps } from './types';
import { splitMathText } from '../../utils';

const DEFAULT_SEPARATOR = '$';

export const MathText: FC<IMathTextProps> = ({ children, separator = DEFAULT_SEPARATOR, ...props }) => {
  const splittedText = useMemo(() => splitMathText(children, separator), [children, separator]);

  return (
    <Typography.Text {...props}>
      {splittedText.map(({ type, value }) => {
        if (type === 'math') {
          return <InlineMath key={value}>{value}</InlineMath>;
        }

        return value;
      })}
    </Typography.Text>
  );
};
