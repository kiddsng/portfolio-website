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
            className="bg-tertiary sm:w-[330px] w-full rounded-2xl"
        >
            <img
                src={image}
                alt={name}
                className="w-full h-[230px] object-cover rounded-t-2xl"
            />
            <div className="h-[340px] flex flex-col p-5">
                <h3 className="text-black font-bold text-[20px]">{name}</h3>
                <p className="text-black-100 font-light text-[12px]">{associate}</p>
                <p className="text-black-100 font-medium text-[14px] mt-2">
                    {description}
                </p>
                <div className="mt-auto">
                    <p className="text-black-100 font-medium text-[10px]">{date}</p>
                    <p className="text-black-100 font-light text-[14px]">{placement}</p>
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
            <div className="flex flex-row flex-wrap gap-10 mt-12 py-8">
                {competitions.map((competition, index) => (
                    <CompetitionCard index={index} key={`competition-${index}`} {...competition} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Competitions, "");
