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
        <div
            className="bg-tertiary w-[180px] h-[220px] flex-none flex flex-col gap-2 rounded-2xl p-3 mx-3"
        >
            <div className="w-full flex flex-row justify-between items-start">
                <h3 className="text-black font-bold text-[14px]">{title}</h3>
                <img src={level} alt="level" className="w-5 h-5 object-contain" />
            </div>
            <p className="text-black-100 font-medium text-[12px]">{description}</p>
            <div className="mt-auto">
                <p className="text-black-100 font-light text-[10px]">{associate}</p>
                <p className="text-black-100 font-medium text-[11px]">{date}</p>
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
                className="relative flex overflow-hidden mt-12 py-8"
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
                        <AchievementCard key={`achievement-stack-one-${index}`} {...achievement} />
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
                        <AchievementCard key={`achievement-stack-two-${index}`} {...achievement} />
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Achievements, "");
