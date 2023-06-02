const ThemeToggle = ({ theme, setTheme }) => {
	return (
		<div
			className={`${
				theme === "dark" ? "bg-slate-800" : "bg-[#ccc]"
			} relative z-20 h-[34px] w-[60px] rounded-full`}
		>
			<span
				className={`${
					theme === "dark" ? "right-[4px]" : "left-[4px]"
				} absolute bottom-[4px] h-[26px] w-[26px] cursor-pointer rounded-full bg-white`}
				onClick={() => setTheme(theme === "dark" ? "" : "dark")}
			></span>
		</div>
	);
};

export default ThemeToggle;
