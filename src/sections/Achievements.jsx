import React from "react";

import { motion } from "framer-motion";

import { link } from "../assets";
import { achievements } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const AchievementCard = ({
	index,
	title,
	description,
	associate,
	date,
	level,
	imageUrl,
}) => {
	return (
		<div className="mx-3 flex h-[220px] w-[180px] flex-none flex-col gap-2 rounded-2xl bg-tertiary p-3">
			<div className="flex w-full flex-row items-start justify-between">
				<h3 className="text-[14px] font-bold text-black">{title}</h3>
				<img src={level} alt="level" className="h-5 w-5 object-contain" />
			</div>
			<p className="text-[12px] font-medium text-black-100">{description}</p>
			<div className="mt-auto">
				<p className="text-[10px] font-light text-black-100">{associate}</p>
				<p className="text-[11px] font-medium text-black-100">{date}</p>
			</div>
		</div>
	);
};

// https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/#demo
const Achievements = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>My Notable feats</p>
				<h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
			</motion.div>
			<motion.div
				variants={fadeIn("up", "spring", 0.2, 1.5)}
				className="relative mt-12 flex overflow-hidden py-8"
			>
				<motion.div
					animate={{
						x: ["0%", "-100%"],
					}}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						duration: 25,
						ease: "linear",
						delay: 0,
					}}
					className="flex flex-row"
				>
					{achievements.map((achievement, index) => (
						<AchievementCard
							key={`achievement-stack-one-${index}`}
							{...achievement}
						/>
					))}
				</motion.div>
				<motion.div
					animate={{
						x: ["100%", "0%"],
					}}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						duration: 25,
						ease: "linear",
						delay: 0,
					}}
					className="absolute left-0 flex flex-row"
				>
					{achievements.map((achievement, index) => (
						<AchievementCard
							key={`achievement-stack-two-${index}`}
							{...achievement}
						/>
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Achievements, "");
