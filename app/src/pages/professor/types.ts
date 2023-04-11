import { type TASKS_CONFIGURATION } from 'config';

export interface ITemplateProps {
  template: typeof TASKS_CONFIGURATION[0]['templates'][0]
}
