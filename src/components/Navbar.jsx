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
            </div>
        </nav>
    );
};

export default Navbar;