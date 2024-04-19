import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
	name: "stock",

	initialState: {
		categories: [],
		brands: [],
		firms: [],
		products: [],
		purchases: [],
		sales: [],
		loading: false,
		error: false,
	},
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
			state.error = false;
		},
		// firmsSuccess: (state, { payload }) => {
		//   state.loading = false;
		//   state.firms = payload;
		// },
		// brandsSuccess: (state, { payload }) => {
		//   state.loading = false;
		//   state.brands = payload;
		// },
		// getSuccess: (state, { payload }) => {
		//   console.log(payload);
		//   state.loading = false;
		//   // state.brands = payload;
		//   state[payload.url] = payload.data
		// },
		getSuccess: (state, { payload: { data, url } }) => {
			// console.log(payload);
			state.loading = false;
			state[url] = data; // state["brands"] - state["firms"]
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const {
	fetchStart,
	// firmsSuccess,
	getSuccess,
	// brandsSuccess,
	fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
