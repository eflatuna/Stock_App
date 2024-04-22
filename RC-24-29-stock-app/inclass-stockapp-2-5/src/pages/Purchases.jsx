import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Purchases = () => {
	const { getStockData } = useStockCall();
	useEffect(() => {
		getStockData();
	}, []);
};

export default Purchases;
