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
				className="mt-12 flex flex-col gap-8"
			>
				<div className="flex flex-col">
					<label htmlFor="name" className="mb-2 font-medium text-black">
						Your Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="What's your name?"
						className="rounded border-none bg-tertiary px-4 py-3 text-[14px] text-black-100 outline-none placeholder:text-black-100"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email" className="mb-2 font-medium text-black">
						Your Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="What's your email?"
						className="rounded border-none bg-tertiary px-4 py-3 text-[14px] text-black-100 outline-none placeholder:text-black-100"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message" className="mb-2 font-medium text-black">
						Your Message
					</label>
					<textarea
						rows="7"
						id="message"
						name="message"
						placeholder="What's your message?"
						className="rounded border-none bg-tertiary px-4 py-3 text-[14px] text-black-100 outline-none placeholder:text-black-100"
					/>
				</div>
				<button
					type="submit"
					className="mx-auto w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-black shadow-md shadow-secondary outline-none"
				>
					{loading ? "Sending..." : "Send"}
				</button>
			</motion.form>
		</>
	);
};

export default SectionWrapper(Contact, "contact");
