import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import BrandCard from "../components/Cards/BrandCard";
import useStockCall from "../hooks/useStockCall";
import MyButton from "../components/Commons/MyButton";
import BrandForm from "../components/Forms/BrandForm";
import PageHeader from "../components/Commons/PageHeader";
import loadingGif from "../assets/loading.gif";
import StockModal from "../components/Commons/StockModal";

const Brands = () => {
	const { getStockData } = useStockCall();
	const { brands, loading } = useSelector((state) => state.stock);
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
		getStockData("brands");
	}, []);
	return (
		<Container maxWidth={"xl"}>
			<PageHeader text="Brands" />
			<MyButton
				variant="contained"
				onClick={handleOpen}
				title="	New Brand"
			/>

			<Grid container spacing={2} mt={3}>
				{/* stock ta oluşturduğumuz loading stateini bu şekilde kullanabiliriz. */}
				{loading ? (
					<img src={loadingGif} alt="loading..." height={500} />
				) : (
					brands.map((brand) => (
						<Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
							<BrandCard
								{...brand}
								handleOpen={handleOpen}
								setInitialState={setInitialState}
							/>
						</Grid>
					))
				)}
			</Grid>
			{open && (
				<StockModal
					open={open}
					handleClose={handleClose}
					initialState={initialState}
				>
					<BrandForm />
				</StockModal>
			)}
		</Container>
	);
};

export default Brands;
