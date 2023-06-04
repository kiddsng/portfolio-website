import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const HeroCodeSnippet = () => {
	return (
		<motion.div
			variants={fadeIn("left", "tween", 0.2, 1.5)}
			className="mx-auto flex w-full flex-col gap-4 lg:max-w-3xl"
		>
			<div>
				<div className="ml-2 flex flex-row items-center gap-1">
					<i className="fa-solid fa-circle fa-2xs text-red-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-yellow-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-green-500"></i>
					<h3 className="ml-2 rounded-t-lg bg-white px-6 py-2 text-[14px] font-medium text-[#252525] dark:bg-[#303741] dark:text-[#f5f5f5]">
						greet.py
					</h3>
				</div>
				<div className={`${styles.heroCard}`}>
					<ul className="list-none break-words text-[16px] text-blue-500">
						<li>
							<span className="text-red-500">from</span>&nbsp;
							<span className="text-orange-500">utils</span>&nbsp;
							<span className="text-red-500">import</span>&nbsp;
							<span className="text-purple-500">closeBrowser</span>,&nbsp;
							<span className="text-[#252525] dark:text-[#f5f5f5]">
								greetMessage
							</span>
							,&nbsp;<span className="text-purple-500">specialPrint</span>
						</li>
						<li>
							<br />
						</li>
						<li>
							<span className="text-red-500">def</span>&nbsp;
							<span className="text-purple-500">greet</span>(
							<span className="text-orange-500">user</span>):
						</li>
						<li>
							&emsp;<span className="text-red-500">if</span>&nbsp;
							<span className="text-orange-500">user</span>
							<span className="text-red-500">&nbsp;==&nbsp;</span>"amazing"
							<span className="text-[#252525] dark:text-[#f5f5f5]">:</span>
						</li>
						<li>
							&emsp;&emsp;<span className="text-purple-500">specialPrint</span>(
							<span className="text-[#252525] dark:text-[#f5f5f5]">
								greetMessage
							</span>
							)
						</li>
						<li>
							&emsp;<span className="text-red-500">else</span>:
						</li>
						<li>
							&emsp;&emsp;<span className="text-purple-500">closeBrowser</span>
							()
						</li>
						<li>
							<br />
						</li>
						<li>
							<span className="text-purple-500">greet</span>(
							<span className="text-orange-500">user</span>)
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className="ml-2 flex flex-row items-center gap-1">
					<i className="fa-solid fa-circle fa-2xs text-red-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-yellow-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-green-500"></i>
					<h3 className="ml-2 rounded-t-lg bg-white px-6 py-2 text-[14px] font-medium text-[#252525] dark:bg-[#303741] dark:text-[#f5f5f5]">
						terminal
					</h3>
				</div>
				<div className={`${styles.heroCard}`}>
					<p className="text-[16px] text-[#a8a8a8]">
						<span className="fa-solid fa-angles-right fa-sm"></span>
						&nbsp;python greet.py
					</p>
					<p className={`${styles.heroHeadText}`}>
						Hi there! Welcome to my website... My name is&nbsp;
						<span className="text-indigo-500">Kidd</span>. I'm just someone who
						likes to code in his free time. This website is one of the projects
						that I have done, with&nbsp;
						<span className="text-indigo-500">
							React, Vite, Tailwind CSS, and Framer Motion.
						</span>
						&nbsp; I hope you enjoy your stay!&nbsp;
						<span className="fa-solid fa-face-smile fa-lg text-yellow-500"></span>
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default HeroCodeSnippet;
