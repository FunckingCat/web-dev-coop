import { type Dispatch } from '@reduxjs/toolkit';

import { type ValueOf } from 'shared';

import { type store } from './store';
import { type studentActions } from './student';

export type ActionsType = ValueOf<typeof studentActions>;

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = Dispatch<ActionsType>;
