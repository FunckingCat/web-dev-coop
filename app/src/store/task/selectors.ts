import { createSelector } from '@reduxjs/toolkit';
import { type AppStateType } from '../types';

export const selectedTasksSelector = (state: AppStateType) => state.task.selectedTasks;

const selectTaskId = (state: AppStateType, taskId: number) => taskId;

export const taskSelector = createSelector(
  [selectedTasksSelector, selectTaskId],
  (tasks, taskId) => tasks.find((task: { id: number }) => task.id === taskId)
);
