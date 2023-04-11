import { useDispatch } from 'react-redux';

import { type AppDispatchType } from 'store';

export const useTypedDispatch = () => useDispatch<AppDispatchType>();
