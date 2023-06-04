import { useState } from "react";
import { BrowserRouter } from "react-router-dom"; // npm install react-router-dom

import { ThemeContext } from "./context/ThemeContext";

import {
	About,
	Achievements,
	Competitions,
	Contact,
	Experience,
	Footer,
	Hero,
	Navbar,
	Projects,
} from "./sections";

const App = () => {
	const [theme, setTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : ""
	);

	return (
		<BrowserRouter>
			<ThemeContext.Provider value={theme}>
				<div
					className={`${
						theme === "dark" ? "bg-[#121921]" : "bg-[#f0f1f5]"
					} relative z-0`}
				>
					<div>
						<Navbar theme={theme} setTheme={setTheme} />
						<Hero />
					</div>
					{/* <About />
					<Experience />
					<Projects />
					<Competitions />
					<Achievements />
					<Contact />
					<Footer /> */}
				</div>
			</ThemeContext.Provider>
		</BrowserRouter>
	);
};

export default App;
