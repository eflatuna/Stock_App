// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import * as React from "react";
// import useStockCall from "../../hooks/useStockCall";

// export default function BrandCard({
// 	_id,
// 	name,
// 	image,
// 	handleOpen,
// 	setInitialState,
// }) {
// 	const { deleteBrands } = useStockCall();
// 	return (
// 		<Card
// 			sx={{
// 				height: 390,
// 				display: "flex",
// 				flexDirection: "column",
// 				justifyContent: "space-between",
// 				padding: "0.5rem",
// 			}}
// 		>
// 			<CardContent>
// 				<Typography gutterBottom variant="h5" component="div">
// 					{name}
// 				</Typography>
// 			</CardContent>
// 			<CardMedia
// 				sx={{ height: 140, objectFit: "contain" }}
// 				component="img"
// 				image={image}
// 				title={name}
// 			/>
// 		</Card>
// 	);
// }
