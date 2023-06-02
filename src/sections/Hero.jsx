import React, { useContext } from "react";

import { motion } from "framer-motion";

import { arrowdown, avatar, user } from "../assets";
import { styles } from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
	const theme = useContext(ThemeContext);

	return (
		<motion.section
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`${theme} relative mx-auto flex h-screen w-full max-w-7xl items-center ${styles.paddingX}`}
		>

		</motion.section>
	);
};

export default Hero;
