import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
// import ProductModal from "../components/Modals/ProductModal";
import useStockCall from "../hooks/useStockCall";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Box, Button, Container, Typography } from "@mui/material";
import DataGridDemo from "../components/Grids/DataGridDemo";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { btnHover } from "../styles/globalStyle";

const Products = () => {
	// const { getBrands, getCategories, getProducts } = useStockCall();
	// const { products } = useSelector((state) => state.stock);
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
			</Container>
		</Box>
	);
};

export default Products;
