import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ProductTable() {
	const { getProducts, deleteStockData } = useStockCall();
	const { products } = useSelector((state) => state.stock);
	React.useEffect(() => {
		getProducts();
		deleteStockData();
	}, []);

	const columns = [
		{ field: "_id", headerName: "#", width: 90, editable: true },
		{ field: "name", headerName: "Name", width: 90, editable: true },
		{
			field: "category",
			headerName: "Category",
			width: 150,
			editable: true,
		},
		{ field: "brand", headerName: "Brand", width: 150, editable: true },
		{
			field: "stock",
			headerName: "Stock",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "actions",
			headerName: "Actions",
			type: "actions",
			editable: true,
			getActions: (props) => [
				<GridActionsCellItem
					icon={<DeleteForeverIcon />}
					onClick={() => deleteStockData("products", props.id)}
					label="Delete"
				/>,
			],
		},
	];

	const rows = products.map((product, index) => ({
		id: product._id,
		name: product.name,
		category: product.categoryId.name,
		brand: product.brandId.name,
		stock: product.quantity,
	}));

	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				// checkboxSelection
				disableRowSelectionOnClick
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	);
}
