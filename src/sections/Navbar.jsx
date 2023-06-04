import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import ThemeToggle from "../components/ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ theme, setTheme }) => {
	return (
		<nav className={`${theme} fixed top-0 z-20 flex w-full items-center py-5 ${styles.paddingX}`}>
			<div
				className="mx-auto flex w-full max-w-7xl items-center justify-between"
			>
				<Link
					to=""
					className="flex items-center gap-2"
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					<p className="cursor-pointer text-[18px] font-bold text-black dark:text-white">
						Kidd Sng
					</p>
				</Link>
				<ThemeToggle theme={theme} setTheme={setTheme} />
			</div>
		</nav>
	);
};

export default Navbar;
