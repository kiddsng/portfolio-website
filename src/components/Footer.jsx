import React from "react";

import { logo } from "../assets";
import { navLinks, socialLinks, resourceLinks } from "../constants";
import { styles } from "../styles";

const Footer = () => {
    return (
        <footer className={`bg-tertiary w-full flex items-center ${styles.paddingX}`}>
            <div className="w-full flex flex-col max-w-7xl mx-auto">
                <div className="flex sm:flex-row flex-col sm:items-start items-center sm:gap-[64px] gap-[32px] border-b-2 border-black py-12">
                    <div className="sm:text-start text-center">
                        <h2 className="text-black font-medium text-[18px]">Navigation</h2>
                        <ul className="list-none flex flex-col gap-1 mt-1">
                            {navLinks.map((navLink) => (
                                <li
                                    key={navLink.id}
                                    className="text-black-100 text-[14px] cursor-pointer hover:text-white"
                                >
                                    <a href={`#${navLink.id}`}>{navLink.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:text-start text-center">
                        <h2 className="text-black font-medium text-[18px]">Socials</h2>
                        <ul className="list-none flex flex-col gap-1 mt-1">
                            {socialLinks.map((socialLink) => (
                                <li
                                    key={socialLink.id}
                                    className="text-black-100 text-[14px] cursor-pointer hover:text-white"
                                >
                                    <a href={`${socialLink.url}`} target="_blank">{socialLink.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:text-start text-center">
                        <h2 className="text-black font-medium text-[18px]">Resources</h2>
                        <ul className="list-none flex flex-col gap-1 mt-1">
                            {resourceLinks.map((resourceLink) => (
                                <li
                                    key={resourceLink.id}
                                    className="text-black-100 text-[14px] cursor-pointer hover:text-white"
                                >
                                    <a href={`${resourceLink.url}`} target="_blank">{resourceLink.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col-reverse justify-between items-center py-6">
                    <span className="text-black-100 text-[12px]">&copy; 2023 All rights reserved</span>
                    <span className="text-black-100 text-[12px]">Created with React, Vite, and Tailwind CSS</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;