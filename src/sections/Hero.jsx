import React from "react";

import { motion } from "framer-motion";

import { arrowdown, avatar, user } from "../assets";
import { styles } from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const Hero = () => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`relative w-full flex items-center max-w-7xl h-screen mx-auto ${styles.paddingX}`}
        >
            <div className={`w-full flex sm:flex-row justify-between items-center flex-col gap-8 -mt-10`}>
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1.5)}
                >
                    <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-secondary">Kidd</span></h1>
                    <p className={`${styles.heroSubText}`}>I develop user interfaces, <br className="sm:block hidden" /> web applications, and <br className="sm:block hidden" /> machine learning algorithms.</p>
                    <p className={`${styles.heroSubText2}`}>Welcome to my website.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1.5)}
                    className="flex flex-col justify-center items-center gap-2 max-w-xs"
                >
                    <img src={user} alt="user" className="w-[128px] h-[128px] object-contain" />
                    <h3 className="text-black font-bold sm:text-[24px] text-[20px]">My status</h3>
                    <p className="text-black-100 sm:text-[20px] text-[16px] text-center px-6 py-1">Currently serving National Service</p>
                </motion.div>
            </div>
            <div className="w-full flex flex-col justify-center items-center absolute left-0 bottom-4">
                <h3 className="text-black sm:text-[20px] text-[16px]">Find out more about me below</h3>
                <a href="#about" className="mt-1">
                    <div className="w-[35px] h-[48px] flex justify-center items-start py-2">
                        <motion.img
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            src={arrowdown}
                            className="w-4 h-4 object-contain"
                        />
                    </div>
                </a>
            </div>
        </motion.section>
    );
};

export default Hero;