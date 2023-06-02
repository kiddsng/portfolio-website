import React from "react";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ title, company_name, icon, date, points }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#dddddd", color: "000" }}
			contentArrowStyle={{ borderRight: "7px solid #d9d9d9" }}
			date={date}
			iconStyle={{ background: "fff" }}
			icon={
				<div className="flex h-full w-full items-center justify-center">
					<img
						src={icon}
						alt={company_name}
						className="h-[60%] w-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-[24px] font-bold text-black">{title}</h3>
				<p
					className="text-[16px] font-semibold text-black"
					style={{ margin: 0 }}
				>
					{company_name}
				</p>
			</div>
			<ul className="ml-4 mt-5 list-disc space-y-2">
				{points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="pl-1 text-[14px] tracking-wider text-black-100"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>What I have done so far</p>
				<h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
			</motion.div>
			<div className="mt-12 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} {...experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "");
