import { type ComponentProps } from 'react';

import { type PATHS } from 'config';
import { type ValueOf } from 'shared';

export interface IErrorPageProps extends ComponentProps<'div'> {
  message: string
  redirect?: ValueOf<typeof PATHS>
}
