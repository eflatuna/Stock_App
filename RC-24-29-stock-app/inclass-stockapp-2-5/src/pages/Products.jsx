import React, { useEffect, useState } from "react";
import ProductModal from "../components/Modals/ProductModal";
import { Box, Button, Container, Typography } from "@mui/material";
import ProductTable from "../components/Tables/ProductTable";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";

const Products = () => {
	const { getStockData, getProCatBrand } = useStockCall();
	const { products } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		getStockData("products");
		getStockData("categories");
		getStockData("brands");
		// getProCatBrand()
	}, []);
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
				<ProductTable />
				{open && <ProductModal open={open} handleClose={handleClose} />}
			</Container>
		</Box>
	);
};

export default Products;
