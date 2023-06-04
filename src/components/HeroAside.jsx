import { motion } from "framer-motion";

import { avatar } from "../assets";
import { navLinks, socialLinks } from "../constants";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const HeroAside = () => {
	return (
		<motion.aside
			variants={fadeIn("right", "tween", 0.2, 1.5)}
			className="flex w-full flex-none flex-col gap-4 lg:w-[352px]"
		>
			<div className={`min-h-56 ${styles.heroCard}`}>
				<div className="flex flex-row">
					<img src={avatar} alt="Avatar" className="h-20 w-20 object-contain" />
					<div className="ml-2 p-1">
						<h3 className="text-[16px] font-bold text-[#252525] dark:text-[#f5f5f5]">
							Kidd Sng
						</h3>
						<p className="text-[12px] font-light text-[#a8a8a8]">
							Just someone who's into coding{" "}
							<span className="fa-solid fa-face-smile fa-lg text-yellow-500"></span>
						</p>
					</div>
				</div>
				<div className="relative mt-6 border-2 border-[#a8a8a8] p-2 dark:border-[#121921]">
					<p className="absolute -top-[10px] z-10 bg-white px-2 text-[12px] font-light text-[#a8a8a8] dark:bg-[#303741]">
						My current status in life
					</p>
					<p className="p-2 text-[14px] text-[#252525] dark:text-[#f5f5f5]">
						I am{" "}
						<span className="text-indigo-500">serving National Service</span>.
					</p>
				</div>
				<p className="mt-2 text-[11px] font-light text-[#a8a8a8]">
					Last Updated on <span className="font-medium">4 June 2023</span>
				</p>
			</div>
			<div className={`h-32 ${styles.heroCard}`}>
				<h3 className="text-[16px] font-bold tracking-wide text-[#252525] dark:text-[#f5f5f5]">
					My social links
				</h3>
				<ul className="mt-2 list-none">
					{socialLinks.map((socialLink) => (
						<li
							key={socialLink.id}
							className="mt-1 flex text-[14px] text-[#a8a8a8]"
						>
							<div className="h-6 w-6">
								<i className={`${socialLink.icon} fa-lg`}></i>
							</div>
							<a
								href={socialLink.url}
								target="_blank"
								className="ml-1 truncate hover:text-[#252525] dark:hover:text-[#f5f5f5]"
							>
								{socialLink.url}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className={`h-48 ${styles.heroCard}`}>
				<h3 className="text-[16px] font-bold tracking-wide text-[#252525] dark:text-[#f5f5f5]">
					Things in the website
				</h3>
				<ul className="mt-2 list-none">
					{navLinks.map((navLink) => (
						<li
							key={navLink.id}
							className="mt-1 truncate text-[14px] text-[#a8a8a8] "
						>
							<a
								href={`#${navLink.id}`}
								className="hover:text-[#252525] dark:hover:text-[#f5f5f5]"
							>
								{navLink.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</motion.aside>
	);
};

export default HeroAside;
