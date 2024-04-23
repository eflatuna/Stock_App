import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import ProductModal from "../components/Modals/ProductModal";
import useStockCall from "../hooks/useStockCall";

import { Box, Button, Container, Typography } from "@mui/material";
import DataGridDemo from "../components/Grids/DataGridDemo";

const Products = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setInitialState({
			name: "",
			phone: "",
			address: "",
			image: "",
		});
	};
	const [initialState, setInitialState] = useState({
		name: "",
		phone: "",
		address: "",
		image: "",
	});
	// console.log("firms:", firms);
	// console.log("firms:", initialState);
	// useEffect(() => {
	// 	getBrands();
	// 	getCategories();
	// 	getProducts();
	// }, []);

	return (
		<Box>
			<Typography
				align="center"
				variant="h4"
				component="h1"
				color="secondary.second"
			>
				Products
			</Typography>
			<Button variant="contained" onClick={handleOpen}>
				New Product
			</Button>
			<Container>
				<DataGridDemo />
				{open && (
					<ProductModal
						open={open}
						handleClose={handleClose}
						initialState={initialState}
					/>
				)}
			</Container>
		</Box>
	);
};

export default Products;
