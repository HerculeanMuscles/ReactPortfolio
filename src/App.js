import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Background from "./components/Layout/Background";

// import Particles, { ISourceOptions, Main } from "react-tsparticles";
// import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
//import Particles from "react-particles-js";

function App() {
	return (
		<>
			<div className="home-container">
				<Header />

				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/About"} element={<About />} />
					<Route path={"/Works"} element={<Works />} />
					<Route path={"/Contact"} element={<Contact />} />
					<Route path={"/Services"} element={<Services />} />
				</Routes>

				<Footer />
			</div>
			<Background />

			{/* <Particles
				params={{
					polygon: {
						enable: true,
						type: "inside",
						move: {
							radius: 10,
						},
						url: "./logo.svg",
					},
				}}
			/> */}
			{/* <Particles options={options} init={initialize} />; */}
		</>
	);
}

export default App;
