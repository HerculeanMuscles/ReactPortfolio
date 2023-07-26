import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/About"} element={<About />} />
				<Route path={"/Works"} element={<Works />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
