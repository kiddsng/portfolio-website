import React, { useState } from "react";

import { motion } from "framer-motion";

import { link } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({ featured }) => {
    return (
        <div className="bg-tertiary rounded-3xl h-fit p-5">
            <div className="flex lg:flex-row flex-col justify-between gap-3">
                <div className="flex flex-col gap-1">
                    <h3 className="text-black font-bold text-[24px]">{featured.name}</h3>
                    <p className="font-medium text-[14px]">
                        {featured.tags.map((tag, index) => (
                            <span key={tag.name} className="text-black-100">
                                #{tag.name}{" "}
                            </span>
                        ))}
                    </p>
                    <div className="flex items-center">
                        <img src={link} alt="link" className="w-3 h-3 object-contain" />
                        <a
                            href={`https://github.com/kiddsng/${featured.source_code_link}`}
                            target="_blank"
                            className="text-black-100 text-[14px] hover:text-secondary ml-2"
                        >
                            .../{featured.source_code_link}
                        </a>
                    </div>
                </div>
                <img
                src={featured.image}
                alt="Featured project"
                className="w-[360px] h-[230px] object-fill rounded-2xl md:block hidden"
                />
            </div>
            <div className="text-black-100 text-[17px] mt-4 p-2">
                <p>{featured.description}</p>
            </div>
        </div>
    );
};

const Projects = () => {
    const [featured, setFeatured] = useState(projects[0]);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My featured work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>
            <div className="flex md:flex-row flex-col gap-10 mt-12 py-8">
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1.5)}
                    className="flex md:flex-col flex-row gap-7 overflow-hidden overflow-x-auto"
                >
                    {projects.map((project, index) => (
                        <div
                            key={`project-${index}`}
                            className="w-[224px] h-[156px] flex-none"
                        >
                            <img
                                src={project.image}
                                alt={`Featured project ${index}`}
                                className={`${
                                    featured.name === project.name
                                        ? "opacity-100 shadow-md shadow-secondary"
                                        : "opacity-60"
                                } w-full h-full object-fill rounded-2xl cursor-pointer hover:opacity-100`}
                                onClick={() => setFeatured(project)}
                            />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1.5)}
                    className="flex-1 mx-auto"
                >
                    <ProjectCard featured={featured} />
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
