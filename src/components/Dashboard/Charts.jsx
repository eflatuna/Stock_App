import { AreaChart, Grid } from "@tremor/react";
import { useSelector } from "react-redux";

const chartdata = [
	{
		date: "Jan 22",
		SemiAnalysis: 2890,
		"The Pragmatic Engineer": 2338,
	},
	{
		date: "Feb 22",
		SemiAnalysis: 2756,
		"The Pragmatic Engineer": 2103,
	},
	{
		date: "Mar 22",
		SemiAnalysis: 3322,
		"The Pragmatic Engineer": 2194,
	},
	{
		date: "Apr 22",
		SemiAnalysis: 3470,
		"The Pragmatic Engineer": 2108,
	},
	{
		date: "May 22",
		SemiAnalysis: 3475,
		"The Pragmatic Engineer": 1812,
	},
	{
		date: "Jun 22",
		SemiAnalysis: 3129,
		"The Pragmatic Engineer": 1726,
	},
	{
		date: "Jul 22",
		SemiAnalysis: 3490,
		"The Pragmatic Engineer": 1982,
	},
	{
		date: "Aug 22",
		SemiAnalysis: 2903,
		"The Pragmatic Engineer": 2012,
	},
	{
		date: "Sep 22",
		SemiAnalysis: 2643,
		"The Pragmatic Engineer": 2342,
	},
	{
		date: "Oct 22",
		SemiAnalysis: 2837,
		"The Pragmatic Engineer": 2473,
	},
	{
		date: "Nov 22",
		SemiAnalysis: 2954,
		"The Pragmatic Engineer": 3848,
	},
	{
		date: "Dec 22",
		SemiAnalysis: 3239,
		"The Pragmatic Engineer": 3736,
	},
];

const dataFormatter = (number) =>
	`$${Intl.NumberFormat("us").format(number).toString()}`;

export default function Charts() {
	const { sales, purchases } = useSelector((state) => state.stock);
	const salesData = sales.map((item) => ({
		date: new Date(item.createdAt).toLocaleDateString(),
		sale: item.amount,
	}));
	const purchasesData = purchases.map((item) => ({
		date: new Date(item.createdAt).toLocaleString(),
		purchase: item.amount,
	}));
	return (
		<Grid container spacing={3} mt={3}>
			<Grid item xs={12} md={6}>
				<AreaChart
					className="h-80"
					data={salesData}
					index="date"
					categories={["sale"]}
					colors={["indigo", "rose"]}
					valueFormatter={dataFormatter}
					yAxisWidth={60}
					onValueChange={(v) => console.log(v)}
				/>
				<AreaChart
					className="h-80"
					data={purchasesData}
					index="date"
					categories={["purchase"]}
					colors={["fuchsia"]}
					valueFormatter={dataFormatter}
					yAxisWidth={60}
					onValueChange={(v) => console.log(v)}
				/>
			</Grid>
		</Grid>
	);
}
