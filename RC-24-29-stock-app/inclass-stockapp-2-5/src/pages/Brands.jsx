import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import BrandCard from "../components/Cards/FirmCard";
import BrandModal from "../components/Modals/FirmModal";
import useStockCall from "../hooks/useStockCall";

const Brands = () => {
	const { getBrands } = useStockCall();
	const { brands } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setInitialState({
			name: "",
			image: "",
		});
	};
	const [initialState, setInitialState] = useState({
		name: "",
		image: "",
	});
	console.log("brands:", brands);
	console.log("brands:", initialState);

	useEffect(() => {
		getBrands();
	}, []);

	return (
		<Container>
			<Typography
				align="center"
				variant="h4"
				component="h1"
				color="secondary.second"
			>
				Brands
			</Typography>
			<Button variant="contained" onClick={handleOpen}>
				New Brand
			</Button>
			<Grid container spacing={2} mt={3}>
				{brands.map((brand) => (
					<Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
						<BrandCard
							{...brand}
							handleOpen={handleOpen}
							setInitialState={setInitialState}
						/>
					</Grid>
				))}
			</Grid>
			{open && (
				<BrandModal
					open={open}
					handleClose={handleClose}
					initialState={initialState}
				/>
			)}
		</Container>
	);
};

export default Brands;
