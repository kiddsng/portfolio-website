import React from "react";

import { motion } from "framer-motion";

import { competitions } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const CompetitionCard = ({
	index,
	name,
	description,
	associate,
	date,
	placement,
	image,
	imageUrl,
}) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.8, 0.75)}
			className="w-full rounded-2xl bg-tertiary sm:w-[330px]"
		>
			<img
				src={image}
				alt={name}
				className="h-[230px] w-full rounded-t-2xl object-cover"
			/>
			<div className="flex h-[340px] flex-col p-5">
				<h3 className="text-[20px] font-bold text-black">{name}</h3>
				<p className="text-[12px] font-light text-black-100">{associate}</p>
				<p className="mt-2 text-[14px] font-medium text-black-100">
					{description}
				</p>
				<div className="mt-auto">
					<p className="text-[10px] font-medium text-black-100">{date}</p>
					<p className="text-[14px] font-light text-black-100">{placement}</p>
				</div>
			</div>
		</motion.div>
	);
};

const Competitions = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Some challenges I took upon</p>
				<h2 className={styles.sectionHeadText}>Competitions.</h2>
			</motion.div>
			<div className="mt-12 flex flex-row flex-wrap gap-10 py-8">
				{competitions.map((competition, index) => (
					<CompetitionCard
						index={index}
						key={`competition-${index}`}
						{...competition}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Competitions, "");
