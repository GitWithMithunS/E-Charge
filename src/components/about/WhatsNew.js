import React from 'react'
import { motion } from "framer-motion";
import { TypingText,TitleText } from "../custom/CustomText";
import styles from "../../styles";
import {staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import StartSteps from '../custom/StartSteps'
import { newFeatures } from '../../constant';
import NewFeatures from '../custom/NewFeatures';
import img20 from '../images/img20.png'
import img_main from '../images/img_main.png'


const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about E-Charge?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={img20}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          style={{ width:"50rem" }}
        />
      </motion.div>
    </motion.div>
  </section>
  )
}

export default WhatsNew
