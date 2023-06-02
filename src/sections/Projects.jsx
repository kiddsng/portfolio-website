import React, { useState } from "react";

import { motion } from "framer-motion";

import { link } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({ featured }) => {
	return (
		<div className="h-fit rounded-3xl bg-tertiary p-5">
			<div className="flex flex-col justify-between gap-3 lg:flex-row">
				<div className="flex flex-col gap-1">
					<h3 className="text-[24px] font-bold text-black">{featured.name}</h3>
					<p className="text-[14px] font-medium">
						{featured.tags.map((tag, index) => (
							<span key={tag.name} className="text-black-100">
								#{tag.name}{" "}
							</span>
						))}
					</p>
					<div className="flex items-center">
						<img src={link} alt="link" className="h-3 w-3 object-contain" />
						<a
							href={`https://github.com/kiddsng/${featured.source_code_link}`}
							target="_blank"
							className="ml-2 text-[14px] text-black-100 hover:text-secondary"
						>
							.../{featured.source_code_link}
						</a>
					</div>
				</div>
				<img
					src={featured.image}
					alt="Featured project"
					className="hidden h-[230px] w-[360px] rounded-2xl object-fill md:block"
				/>
			</div>
			<div className="mt-4 p-2 text-[17px] text-black-100">
				<p>{featured.description}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	const [featured, setFeatured] = useState(projects[0]);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>My featured work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>
			<div className="mt-12 flex flex-col gap-10 py-8 md:flex-row">
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1.5)}
					className="flex flex-row gap-7 overflow-hidden overflow-x-auto md:flex-col"
				>
					{projects.map((project, index) => (
						<div
							key={`project-${index}`}
							className="h-[156px] w-[224px] flex-none"
						>
							<img
								src={project.image}
								alt={`Featured project ${index}`}
								className={`${
									featured.name === project.name
										? "opacity-100 shadow-md shadow-secondary"
										: "opacity-60"
								} h-full w-full cursor-pointer rounded-2xl object-fill hover:opacity-100`}
								onClick={() => setFeatured(project)}
							/>
						</div>
					))}
				</motion.div>
				<motion.div
					variants={fadeIn("left", "tween", 0.2, 1.5)}
					className="mx-auto flex-1"
				>
					<ProjectCard featured={featured} />
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "projects");
