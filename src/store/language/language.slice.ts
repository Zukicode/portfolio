import { createSlice } from '@reduxjs/toolkit';

export interface LanguageState {
	active: string;
}

const initialState: LanguageState = {
	active: 'EN',
};

export const languageSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setLang: (state, action) => {
			state.active = action.payload;
		},
	},
});

export const { reducer, actions } = languageSlice;
