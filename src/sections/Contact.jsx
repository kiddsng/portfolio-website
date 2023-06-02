import React, { useState } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Get in touch with me</p>
                <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
            </motion.div>
            <motion.form
                variants={fadeIn("up", "spring", 0.1, 0.75)}
                className="flex flex-col gap-8 mt-12"
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-black font-medium mb-2">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="What's your name?"
                        className="bg-tertiary text-black-100 text-[14px] placeholder:text-black-100 rounded py-3 px-4 outline-none border-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-black font-medium mb-2">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="What's your email?"
                        className="bg-tertiary text-black-100 text-[14px] placeholder:text-black-100 rounded py-3 px-4 outline-none border-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-black font-medium mb-2">Your Message</label>
                    <textarea
                        rows="7"
                        id="message"
                        name="message"
                        placeholder="What's your message?"
                        className="bg-tertiary text-black-100 text-[14px] placeholder:text-black-100 rounded py-3 px-4 outline-none border-none"
                    />
                </div>
                <button type="submit" className="bg-tertiary w-fit text-black font-bold rounded-xl mx-auto py-3 px-8 outline-none shadow-md shadow-secondary">
                    {loading ? "Sending..." : "Send"}
                </button>
            </motion.form>
        </>
    );
};

export default SectionWrapper(Contact, "contact");