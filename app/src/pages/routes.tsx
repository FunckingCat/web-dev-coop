import { type FC } from 'react';
import { type RouteObject, useRoutes } from 'react-router-dom';

import { PATHS } from 'config';

import { HomePage } from './home';
import { ProfessorPage } from './professor';
import { StudentPage } from './student';
import { Option } from './option';
import { QRPage } from './qr';
import { AboutPage } from './about';
import { TasksPage } from './tasks';

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <HomePage />
  },
  {
    path: PATHS.PROFESSOR_OPTION,
    element: <ProfessorPage />
  },
  {
    path: PATHS.STUDENT,
    element: <StudentPage />
  },
  {
    path: PATHS.STUDENT_OPTION,
    element: <StudentPage />
  },
  {
    path: PATHS.ABOUT,
    element: <AboutPage />
  },
  {
    path: PATHS.OPTION,
    element: <Option />
  },
  {
    path: PATHS.QR,
    element: <QRPage />
  },
  {
    path: PATHS.TASKS,
    element: <TasksPage />
  }
];

export const AppRouter: FC = () => useRoutes(routes);
