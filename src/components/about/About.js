import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../custom/CustomText";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import arrowdown from '../images/arrow-down.svg'

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About E-Charge" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">E-Charge</span> Discover
          nearby{" "}
          <span className="font-extrabold text-white">
            EV charging stations
          </span>
          , check{" "}
          <span className="font-extrabold text-white">
            real-time availability
          </span>
          , and explore detailed specs—all on one user-friendly platform. Plus,
          with our{" "}
          <span className="font-extrabold text-white">unique partnerships</span>
          , turn every stop into a charging opportunity, ensuring you stay
          charged and ready to go, wherever your journey takes you. Join us and
          drive towards a{" "}
          <span className="font-extrabold text-white">greener tomorrow !</span>
        <p></p>Let's <span className="font-extrabold text-white">explore</span> the
          madness of the metaverse by scrolling down
          
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src={arrowdown}
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
