import React from "react";

import { logo } from "../assets";
import { navLinks, socialLinks, resourceLinks } from "../constants";
import { styles } from "../styles";

const Footer = () => {
	return (
		<footer
			className={`flex w-full items-center bg-tertiary ${styles.paddingX}`}
		>
			<div className="mx-auto flex w-full max-w-7xl flex-col">
				<div className="flex flex-col items-center gap-[32px] border-b-2 border-black py-12 sm:flex-row sm:items-start sm:gap-[64px]">
					<div className="text-center sm:text-start">
						<h2 className="text-[18px] font-medium text-black">Navigation</h2>
						<ul className="mt-1 flex list-none flex-col gap-1">
							{navLinks.map((navLink) => (
								<li
									key={navLink.id}
									className="cursor-pointer text-[14px] text-black-100 hover:text-white"
								>
									<a href={`#${navLink.id}`}>{navLink.title}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="text-center sm:text-start">
						<h2 className="text-[18px] font-medium text-black">Socials</h2>
						<ul className="mt-1 flex list-none flex-col gap-1">
							{socialLinks.map((socialLink) => (
								<li
									key={socialLink.id}
									className="cursor-pointer text-[14px] text-black-100 hover:text-white"
								>
									<a href={`${socialLink.url}`} target="_blank">
										{socialLink.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="text-center sm:text-start">
						<h2 className="text-[18px] font-medium text-black">Resources</h2>
						<ul className="mt-1 flex list-none flex-col gap-1">
							{resourceLinks.map((resourceLink) => (
								<li
									key={resourceLink.id}
									className="cursor-pointer text-[14px] text-black-100 hover:text-white"
								>
									<a href={`${resourceLink.url}`} target="_blank">
										{resourceLink.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex flex-col-reverse items-center justify-between py-6 sm:flex-row">
					<span className="text-[12px] text-black-100">
						&copy; 2023 All rights reserved
					</span>
					<span className="text-[12px] text-black-100">
						Created with React, Vite, and Tailwind CSS
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
