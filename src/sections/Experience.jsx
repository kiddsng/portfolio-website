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

const ExperienceCard = ({
    title,
    company_name,
    icon,
    date,
    points,
}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#dddddd", color: "000" }}
            contentArrowStyle={{ borderRight: "7px solid #d9d9d9" }}
            date={date}
            iconStyle={{ background: "fff" }}
            icon={
                <div className="w-full h-full flex justify-center items-center">
                    <img
                        src={icon}
                        alt={company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-black font-bold text-[24px]">{title}</h3>
                <p
                    className="text-black font-semibold text-[16px]"
                    style={{ margin: 0 }}
                >
                {company_name}
                </p>
            </div>
            <ul className="list-disc mt-5 ml-4 space-y-2">
                {points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-black-100 text-[14px] tracking-wider pl-1"
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
            <div className="flex flex-col mt-12">
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
