import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { REDUCER_NAMES } from '../constants';
import { type ISelectedTask, type ITaskState, type IRemoveTask } from './types';

const initialState: ITaskState = {
  selectedTasks: []
};

export const { actions: taskActions, reducer: taskReducer } = createSlice({
  name: REDUCER_NAMES.TASK,
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.selectedTasks = [];
    },
    editSelectedTask: (state, { payload }: PayloadAction<ISelectedTask>) => {
      const hasTaskInStore = state.selectedTasks.find((task) => task.id === payload.id);

      if (hasTaskInStore) {
        state.selectedTasks.map((task) => {
          if (task.id === payload.id) {
            task.amount = payload.amount;
          }
          return task;
        });
      } else {
        state.selectedTasks.push(payload);
      }
    },
    removeTask: (state, { payload }: PayloadAction<IRemoveTask>) => {
      state.selectedTasks = state.selectedTasks.filter((task) => task.id !== payload.id);
    }
  }
});
