import { motion } from "framer-motion";

const ThemeToggle = ({ theme, setTheme }) => {
	return (
		<div
			className={`${
				theme === "dark" ? "bg-[#303741]" : "bg-white"
			} relative h-[34px] w-[72px] rounded-full`}
		>
			<motion.div
				className={`${
					theme === "dark"
						? "right-[4px] bg-[#121921]"
						: "left-[4px] bg-[#f0f1f5]"
				} absolute bottom-[4px] flex h-[26px] w-[34px] cursor-pointer items-center justify-center rounded-full`}
				onClick={() => setTheme(theme === "dark" ? "" : "dark")}
				layout
			>
				<i
					className={`fa-solid ${
						theme === "dark"
							? "fa-cloud-moon text-white"
							: "fa-cloud-sun text-[#252525]"
					}`}
				></i>
			</motion.div>
		</div>
	);
};

export default ThemeToggle;