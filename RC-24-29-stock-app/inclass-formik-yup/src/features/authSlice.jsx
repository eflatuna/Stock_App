import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",

	initialState: {
		currentUser: null,
		loading: false,
		error: false,
		token: null,
	},
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
			state.error = false;
		},
		loginSuccess: (state, { payload }) => {
			state.loading = false;
			state.currentUser = payload?.data?.username;
			state.token = payload?.key;
		},
		logoutSuccess: (state) => {
			state.loading = false;
			state.currentUser = null;
			state.token = null;
		},
		registerSuccess: (state, { payload }) => {
			state.loading = false;
			state.currentUser = payload?.data?.userName;
			state.token = payload?.token;
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const {
	fetchStart,
	fetchFail,
	registerSuccess,
	loginSuccess,
	logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
// https://react.dev/learn/reusing-logic-with-custom-hooks

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.
