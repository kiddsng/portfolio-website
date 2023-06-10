import React, { useContext } from "react";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ theme, title, company_name, icon, date, points }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: theme === "dark" ? "#303741" : "white",
				color: theme === "dark" ? "#f5f5f5" : "#252525",
                borderRadius: "12px",
			}}
			contentArrowStyle={{
				borderRight: `7px solid ${theme === "dark" ? "#303741" : "white"}`,
			}}
			date={date}
			iconStyle={{ background: theme === "dark" ? "#303741" : "white" }}
			icon={
				<div className="flex h-full w-full items-center justify-center">
					<img
						src={icon}
						alt={company_name}
						className="h-[50%] w-[50%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-[24px] font-bold tracking-wider">{title}</h3>
				<p
					className="text-[18px] font-semibold text-[#a8a8a8]"
					style={{ margin: 0 }}
				>
					{company_name}
				</p>
			</div>
			<ul className="ml-4 mt-5 list-disc space-y-2">
				{points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="pl-1 text-[16px]"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	const theme = useContext(ThemeContext);

	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionHeadText}`}>Experience</h2>
				<p className={`${styles.sectionSubText}`}>What I have done so far</p>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="white">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							theme={theme}
							{...experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "");
