import { type TypedUseSelectorHook, useSelector } from 'react-redux';

import { type AppStateType } from 'store';

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;
