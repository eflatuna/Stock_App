import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

//!token bilgisine ihtiyacimiz yoksa bu sekilde kullanabiliriz.
// export const axiosWithPublic =axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
// });

const useAxios = () => {
	const { token } = useSelector((state) => state.auth);
	const axioswithToken = axios.create({
		baseURL: import.meta.env.VITE_BASE_URL,
		headers: { Authorization: `Token ${token} ` },
	});
	return axioswithToken;
};

export default useAxios;
