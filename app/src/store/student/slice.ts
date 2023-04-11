import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type NonNullableFields } from 'shared';

import { REDUCER_NAMES } from '../constants';
import { type IStudentState } from './types';

const initialState: IStudentState = {
  hash: null,
  userHash: null,
  name: null,
  tasks: null
};

export const { actions: studentActions, reducer: studentReducer } = createSlice({
  name: REDUCER_NAMES.STUDENT,
  initialState,
  reducers: {
    addInfo: (state, { payload }: PayloadAction<NonNullableFields<IStudentState>>) => {
      state.hash = payload.hash;
      state.name = payload.name;
      state.userHash = payload.userHash;
      state.tasks = payload.tasks;
    }
  }
});
