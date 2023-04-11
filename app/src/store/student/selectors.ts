import { type AppStateType } from '../index';

export const studentNameSelector = (state: AppStateType) => state.student.name;

export const studentHashSelector = (state: AppStateType) => state.student.hash;

export const studentUserHashSelector = (state: AppStateType) => state.student.userHash;

export const studentTasksSelector = (state: AppStateType) => state.student.tasks;
