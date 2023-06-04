import React, { useContext } from "react";

import { motion } from "framer-motion";

import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { HeroAside, HeroCodeSnippet } from "../components";

const Hero = () => {
	const theme = useContext(ThemeContext);

	return (
		<motion.section
			variants={staggerContainer()}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.25 }}
			className={`${theme} ${styles.paddingX} mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-4 py-4`}
		>
			<div className="mt-[10vh] flex w-full flex-col items-start gap-4 lg:flex-row lg:justify-between">
				<HeroAside />
				<HeroCodeSnippet />
			</div>
			<div className="mt-auto flex flex-row items-center gap-4 text-[#a8a8a8]">
				<i className="fa-solid fa-arrow-right fa-beat"></i>
				<p className="text-[16px] font-semibold lg:text-[18px]">
					Find out more about me below
				</p>
				<i className="fa-solid fa-arrow-left fa-beat"></i>
			</div>
		</motion.section>
	);
};

export default Hero;
