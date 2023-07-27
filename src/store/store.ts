import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as languageReducer } from './language/language.slice';

const reducers = combineReducers({
	language: languageReducer,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
