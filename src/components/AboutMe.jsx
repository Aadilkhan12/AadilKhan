import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A FrontEnd Enginger</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>In India</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    I'm Aadil, an Engineer & Designer passionate about crafting visually striking products. Starting as a teen with HTML & CSS, my toolkit now includes React, Next JS, Chakra UI, Tailwind CSS, and more. From designing YouTube thumbnails in high school to blending design and code, I thrive on innovation.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    My Master's in Computer Applications (MCA) from BVICAM, Paschim Vihar, New Delhi, under GGSIPU, I'm eager to explore new horizons and continuously expand my skill set to enhance my productivity in software development.

Throughout my educational journey, I've excelled academically, achieving an impressive 84.9% in my BCA from VIPS College, Pitampura, New Delhi, and consistently displaying enthusiasm for learning. I value the power of teamwork and have actively participated in various activities, including managing fresher parties and organizing hackathons during my graduation.


                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                    As a Front-End Engineer, I have a strong foundation in HTML, CSS,
JavaScript and Reactjs  as well as experience with modern web development
frameworks such as React. I am also familiar with Next.js, Typescript, Chakra
UI, and Tailwind CSS, which I have used extensively in my previous role at a
INexperience startup (S22).. I have also worked with the team to seamlessly
integrate backend with the front-end of the app..
In my previous role, I was responsible for building and maintaining the front-
end of the product, and have also worked on designing and developing the
website for the company and I am confident in my ability to do the same at
at that company. I am excited about the opportunity to join the team at that
company and contribute to the development of innovative and user-friendly
web applications.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
