import { motion } from "framer-motion";

import { greetCodeLines } from "../constants";
import { styles } from "../styles";
import { codeSnippet, run, letter, output } from "../utils/motion";

const formatWordColor = (word) => {
	switch (word) {
		case "from":
			return "text-red-500";
		case "import":
			return "text-red-500";
		case "def":
			return "text-red-500";
		case "if":
			return "text-red-500";
		case "==":
			return "text-red-500";
		case "else":
			return "text-red-500";
		case "utils":
			return "text-orange-500";
		case "user":
			return "text-orange-500";
		case "closeBrowser":
			return "text-purple-500";
		case "specialPrint":
			return "text-purple-500";
		case "greet":
			return "text-purple-500";
		case "python":
			return "text-[#a8a8a8]";
		case "greet.py":
			return "text-[#a8a8a8]";
		case "greetMessage":
			return "text-[#252525] dark:text-[#f5f5f5]";
		case ",":
			return "text-[#252525] dark:text-[#f5f5f5]";
		case ":":
			return "text-[#252525] dark:text-[#f5f5f5]";
		default:
			return "text-blue-500";
	}
};

const HeroCodeSnippet = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex w-full flex-col gap-4 lg:max-w-3xl"
		>
			<div>
				<div className="ml-2 flex flex-row items-center gap-1">
					<i className="fa-solid fa-circle fa-2xs text-red-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-yellow-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-green-500"></i>
					<h3 className="ml-2 rounded-t-lg bg-white px-6 py-2 text-[14px] font-medium text-[#252525] dark:bg-[#303741] dark:text-[#f5f5f5]">
						greet.py
					</h3>
					<div className="ml-auto mr-4 text-[14px] font-medium text-[#a8a8a8]">
						<p>
							<motion.span
								variants={run()}
								className="fa-solid fa-spinner mr-[6px]"
							></motion.span>
							Run
						</p>
					</div>
				</div>
				<div
					className={`${styles.heroCard} text-[#252525] dark:text-[#f5f5f5]`}
				>
					<motion.ul
						variants={codeSnippet()}
						className="list-none break-all text-[16px]"
					>
						{greetCodeLines.map((greetCodeLine, index) => (
							<li key={`greet-code-line-${index}`}>
								<span className="fa-solid fa-angles-right fa-sm text-[#a8a8a8]"></span>
								&emsp;
								{(index === 3 || index === 5) && <span>&emsp;&emsp;</span>}
								{(index === 4 || index === 6) && (
									<span>&emsp;&emsp;&emsp;</span>
								)}
								{greetCodeLine.split(" ").map((greetCodeWord, index) => (
									<span
										key={`${greetCodeWord}-${index}`}
										className={`${formatWordColor(greetCodeWord)}`}
									>
										{greetCodeWord.split("").map((greetCodeChar, index) => (
											<motion.span
												key={`${greetCodeWord}-${greetCodeChar}-${index}`}
												variants={letter()}
											>
												{greetCodeChar}
											</motion.span>
										))}
										{(greetCodeWord === "from" ||
											greetCodeWord === "utils" ||
											greetCodeWord === "import" ||
											greetCodeWord === "," ||
											greetCodeWord === "def" ||
											greetCodeWord === "if") && <span>&nbsp;</span>}
									</span>
								))}
							</li>
						))}
					</motion.ul>
				</div>
			</div>
			<div>
				<div className="ml-2 flex flex-row items-center gap-1">
					<i className="fa-solid fa-circle fa-2xs text-red-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-yellow-500"></i>
					<i className="fa-solid fa-circle fa-2xs text-green-500"></i>
					<h3 className="ml-2 rounded-t-lg bg-white px-6 py-2 text-[14px] font-medium text-[#252525] dark:bg-[#303741] dark:text-[#f5f5f5]">
						output
					</h3>
				</div>
				<div className={`${styles.heroCard}`}>
					<motion.p variants={output()} className={`${styles.heroHeadText}`}>
						Hi there! Welcome to my website... My name is&nbsp;
						<span className="font-bold text-indigo-500">Kidd</span>. I'm just
						someone who likes to code in his free time. This website is one of
						the projects that I have done, with&nbsp;
						<span className="font-bold text-indigo-500">
							React, Vite, Tailwind CSS, and Framer Motion.
						</span>
						&nbsp; I hope you enjoy your stay!&nbsp;
						<span className="fa-solid fa-face-smile fa-lg text-yellow-500"></span>
					</motion.p>
				</div>
			</div>
		</motion.div>
	);
};

export default HeroCodeSnippet;
