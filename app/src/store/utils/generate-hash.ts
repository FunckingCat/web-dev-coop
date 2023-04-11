import { store } from '../store';

export const generateHash = () => {
  const { selectedTasks } = store.getState().task;

  if (!selectedTasks.length) {
    return null;
  }

  const tasksArray: string[] = [];

  selectedTasks.forEach(({ id, amount }) => {
    tasksArray.push(`${id}N${amount}`);
  });

  const tasksString = tasksArray.join('|');
  const hash = btoa(tasksString);

  return hash;
};
