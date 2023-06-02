import React, { useContext } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext";

/*
The SectionWrapper component is a higher-order component (HOC).
A HOC is a function that takes in a component and returns a new component.
It enhances/extends the capabilities of the wrapped component.
In this case, it gives the animation and ID logic to the section.
*/

const SectionWrapper = (WrappedComponent, idName) => {
	return () => {
		const theme = useContext(ThemeContext);

		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${theme} relative z-0 mx-auto max-w-7xl ${styles.padding}`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<WrappedComponent />
			</motion.section>
		);
	};
};

export default SectionWrapper;
