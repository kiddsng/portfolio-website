import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = ({ theme, setTheme }) => {
	return (
		<nav
			className={`flex w-full items-center ${styles.paddingX} fixed top-0 z-20 py-5`}
		>
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between">
				<Link
					to=""
					className="flex items-center gap-2"
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					<p className="cursor-pointer text-[18px] font-bold text-black">
						Kidd Sng
					</p>
				</Link>
				<ThemeToggle theme={theme} setTheme={setTheme} />
			</div>
		</nav>
	);
};

export default Navbar;
