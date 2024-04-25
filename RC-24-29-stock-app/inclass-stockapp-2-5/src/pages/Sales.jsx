import React, { useEffect, useState } from "react";
import SalesModal from "../components/Modals/SalesModal";
import { Box, Button, Container, Typography } from "@mui/material";
import SalesTable from "../components/Tables/SalesTable";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Sales = () => {
	const { getStockData, getProCatBrand } = useStockCall();
	const { sales } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setInitialState({
			brand: "",
			product: "",
			quantity: "",
			price: "",
		});
	};
	console.log("sales:", sales);
	useEffect(() => {
		getStockData("products");
		getStockData("sales");
		getStockData("brands");
		// getProCatBrand()
	}, []);
	const [initialState, setInitialState] = useState({
		brand: "",
		product: "",
		quantity: "",
		price: "",
	});
	return (
		<Container maxWidth={"xl"}>
			<Typography
				align="center"
				variant="h4"
				component="h1"
				color="secondary.second"
			>
				Sales
			</Typography>
			<Button variant="contained" onClick={handleOpen}>
				New Sales
			</Button>
			{open && (
				<SalesModal
					open={open}
					handleClose={handleClose}
					initialState={initialState}
				/>
			)}
			<SalesTable />
		</Container>
	);
};

export default Sales;
