import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/About"} element={<About />} />
				<Route path={"/Works"} element={<Works />} />
				<Route path={"/Contact"} element={<Contact />} />
				<Route path={"/Services"} element={<Services />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
