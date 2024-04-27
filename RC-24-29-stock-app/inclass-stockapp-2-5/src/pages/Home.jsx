import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/Commons/PageHeader";
import KpiCards from "../components/Dashboard/KpiCards";
import Charts from "../components/Dashboard/Charts";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Home = () => {
	const { getPurcSales } = useStockCall();
	const { loading, error } = useSelector((state) => state.stock);
	useEffect(() => {
		getPurcSales();
	}, []);

	if (loading) return <h2>Loading...</h2>;
	if (error) return <h2>Something went wrong</h2>;

	return (
		<Container maxWidth={"xl"}>
			<PageHeader text="Dashboard" />
			<KpiCards />
			<Charts />
		</Container>
	);
};

export default Home;
