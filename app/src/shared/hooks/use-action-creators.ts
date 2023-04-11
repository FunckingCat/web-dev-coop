import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { type ActionsType } from 'store';

import { useTypedDispatch } from './use-typed-dispatch';

export const useActionCreators = <T extends ActionsType>(actions: T) => {
  const dispatch = useTypedDispatch();

  // eslint-disable-next-line
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
