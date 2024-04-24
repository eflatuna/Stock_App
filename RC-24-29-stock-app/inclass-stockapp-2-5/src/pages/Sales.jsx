import React, { useEffect, useState } from "react";
import SalesModal from "../components/Modals/SalesModal";
import { Box, Button, Container, Typography } from "@mui/material";
import SalesTable from "../components/Tables/SalesTable";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Sales = () => {
	const { getStockData, getProCatBrand } = useStockCall();
	const { products } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};
	console.log("products:", products);
	useEffect(() => {
		getStockData("products");
		getStockData("categories");
		getStockData("brands");
		// getProCatBrand()
	}, []);
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
			{open && <SalesModal open={open} handleClose={handleClose} />}
			<SalesTable />
		</Container>
	);
};

export default Sales;
