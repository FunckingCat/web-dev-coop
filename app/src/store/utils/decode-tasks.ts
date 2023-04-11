import { message } from 'antd';
import { type ISelectedTask } from '../task/types';

export const decodeTasks = (encodedTasks: string): ISelectedTask[] => {
  try {
    const decodedString = atob(encodedTasks);
    const tasks: ISelectedTask[] = decodedString.split('|').map((part) => {
      const [id, amount] = part.split('N');
      if (!id || !amount) {
        throw new Error('Неверный код варианта!');
      }
      return {
        id: Number(id),
        amount: Number(amount)
      };
    });

    return tasks;
  } catch (error) {
    void message.error('Неверный код варианта!');
    return [];
  }
};
