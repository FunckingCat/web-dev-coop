export interface ISelectedTask {
  id: number
  amount: number
}

export interface IRemoveTask {
  id: number
}

export interface ITaskState {
  selectedTasks: ISelectedTask[]
}
