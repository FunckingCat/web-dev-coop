import { type ISelectedTask } from '../task/types';

export interface IStudentState {
  hash: string | null
  name: string | null
  userHash: string | null
  tasks: ISelectedTask[] | null
}
