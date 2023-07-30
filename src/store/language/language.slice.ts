import { createSlice } from '@reduxjs/toolkit';

import allLanguageContent from 'data/data.json';

export interface LanguageState {
	active: any;
}

const initialState: LanguageState = {
	active: allLanguageContent[0],
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
