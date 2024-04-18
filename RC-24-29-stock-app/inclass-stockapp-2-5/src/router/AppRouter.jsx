import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LoginMid from "../pages/LoginMid";
// import RegisterMid from "../pages/RegisterMid";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";
import Firms from "../pages/Firms";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				{/* middlewareli fonksiyonların olduğu sayfalar */}
				{/* <Route path="/" element={<LoginMid />} />
        <Route path="register" element={<RegisterMid />} /> */}
				<Route path="/" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="stock" element={<PrivateRouter />}>
					<Route path="" element={<Dashboard />}>
						//!degismesini istemedimiz sabit kalmasini istedigimiz
						//!kisimlari Dashboard da tanimladik!Buradan sonraki
						//!kisimlar dinamik olacak.
						<Route index element={<Home />} />
						//bos path yerine index de yazabiliyoruz.
						<Route path="brands" element={<Brands />} />
						{/* <Route path="/stock/brands" element={<Brands />} />
						//!absolute path */}
						<Route path="firms" element={<Firms />} />
						//!relative path
						<Route path="products" element={<Products />} />
						<Route path="sales" element={<Sales />} />
						<Route path="purchases" element={<Purchases />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
