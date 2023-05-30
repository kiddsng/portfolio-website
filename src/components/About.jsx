import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-black-100 sm:text-[24px] text-[18px] mt-4"
            >
                Hi! Welcome to my website, my name is Kidd. I recently graduated from
                Temasek Polytechic with a Diploma in Big Data & Analytics with Merit. I
                am interested in coding and programming in general. Currently, I am
                mainly using Python, however, I have some experience in other languages
                like HTML, CSS and JS in web development, and SQL and R for data
                analytics. This GitHub account is for educational purposes and to show
                some of the projects that I have done. I am always happy to learn, so
                feel free to drop an email or message for me if you see or have any
                problem, issue or advice about the stuff I do here! :)
            </motion.p>
        </>
    );
};

export default SectionWrapper(About, "about");
