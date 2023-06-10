import React from "react";

import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionHeadText}`}>About</h2>
				<p className={`${styles.sectionSubText}`}>My introduction</p>
			</motion.div>
			<motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-20">
				<p className="mt-20 text-[18px] text-[#252525] dark:text-[#f5f5f5] sm:text-[24px]">
					My name is Kidd Sng. I recently graduated from Temasek Polytechic with
					a Diploma in Big Data & Analytics with Merit. I am an avid coder, and
					I like to work on my personal projects when I have some free time. I
					am interested in programming in general, and so far I have already
					work with a few modern languages.
					<br />
					<br />
					Currently, I have some experience in languages such as HTML, CSS and
					JS in web development, and Python and SQL for data analytics.
					<br />
					<br />
					Most of the projects that I've done are either for educational
					purposes or personal interests. I have showcased some of my projects
					here and on my GitHub account. Feel free to check them out! Please
					drop me an email or a message if you see or have any problem, issue,
					or advice.{" "}
					<span className="fa-solid fa-face-smile text-yellow-500"></span>
				</p>
				<div className="mt-12 flex flex-row justify-center gap-12">
					{technologies.map((technology) => (
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-[#303741]">
							<img
								src={technology.icon}
								alt={technology.name}
								className="h-12 w-12 object-contain"
							/>
						</div>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, "about");
