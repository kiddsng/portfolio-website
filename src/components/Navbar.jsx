import React, { useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`w-full flex items-center ${styles.paddingX} py-5 fixed top-0 z-20`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to=""
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-black font-bold text-[18px] cursor-pointer">Kidd Sng</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((navLink) => (
                        <li
                            key={navLink.id}
                            className={`${
                                active === navLink.title
                                ? "text-secondary"
                                : "text-black"
                            } font-medium text-[18px] cursor-pointer hover:text-secondary`}
                            onClick={() => setActive(navLink.title)}
                        >
                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${toggle ? "flex" : "hidden"}`}>
                        <ul className="bg-tertiary list-none flex flex-col justify-end items-start gap-4 absolute top-20 right-0 mx-4 my-2 p-6 min-w-[140px] z-10 rounded-xl">
                        {navLinks.map((navLink) => (
                            <li
                            key={navLink.id}
                            className={`${
                                active === navLink.title
                                ? "text-secondary"
                                : "text-black"
                            } text-[16px] font-medium cursor-pointer`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(navLink.title);
                            }}
                            >
                            <a href={`#${navLink.id}`}>{navLink.title}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;