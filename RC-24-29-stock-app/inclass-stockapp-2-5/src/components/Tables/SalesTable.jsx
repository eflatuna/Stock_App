import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnStyle } from "../../styles/globalStyle";

function getRowId(row) {
	console.log(row);
	return row._id;
}

export default function SalesTable() {
	const { deleteStockData } = useStockCall();
	const { products } = useSelector((state) => state.stock);

	const columns = [
		{
			field: "_id",
			headerName: "ID",
			minWidth: 40,
			maxWidth: 70,
			headerAlign: "center",
			align: "center",
			flex: 0,
		},

		{
			field: "categoryId",
			headerName: "Category",
			headerAlign: "center",
			align: "center",
			minwidth: 150,
			editable: true,
			flex: 2,
			valueGetter: (value) => value?.name ?? "-No Category-",
			// console.log(value);
		},
		{
			field: "brandId",
			headerName: "Brand",
			headerAlign: "center",
			align: "center",
			minwidth: 150,
			flex: 2,

			valueGetter: (value) => value?.name ?? "-No Brand-",
			// console.log(value);
		},
		{
			field: "name",
			headerName: "Name",
			minWidth: 150,
			headerAlign: "center",
			align: "center",
			flex: 2,
		},
		{
			field: "quantity",
			headerName: "Stock",
			type: "number",
			minWidth: 110,
			headerAlign: "center",
			align: "center",
			flex: 0.8,
		},
		{
			field: "actions",
			headerName: "Actions",
			headerAlign: "center",
			align: "center",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			minWidth: 40,
			flex: 1,

			renderCell: (params) => (
				// console.log(params)
				<DeleteOutlineIcon
					onClick={() => deleteStockData("products", params.id)}
					sx={btnStyle}
				/>
			),
			// getActions: (props) => [
			// 	<GridActionsCellItem
			// 		icon={<DeleteForeverIcon />}
			// 		onClick={() => deleteStockData("products", props.id)}
			// 		label="Delete"
			// 	/>,
			// ],
		},
	];

	// const rows = products.map((product, index) => ({
	// 	id: product._id,
	// 	name: product.name,
	// 	category: product.categoryId.name,
	// 	brand: product.brandId.name,
	// 	stock: product.quantity,
	// }));

	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				autoHeight
				// rows={rows}
				rows={products}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				getRowId={getRowId}
				pageSizeOptions={[5, 10, 25]}
				// checkboxSelection
				disableRowSelectionOnClick
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	);
}
