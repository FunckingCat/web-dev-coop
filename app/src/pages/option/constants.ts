import { TASKS_CONFIGURATION } from 'config';

export const TASKS = TASKS_CONFIGURATION.flatMap(({ templates }) => templates);
