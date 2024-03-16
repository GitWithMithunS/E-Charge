import React from 'react'
import { motion } from "framer-motion";
import { TypingText,TitleText } from "../custom/CustomText";
import InsightCard from '../custom/InsightCard';
import styles from "../../styles";
import {staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import StartSteps from '../custom/StartSteps'
import { insights } from '../../constant';
import NewFeatures from '../custom/NewFeatures';


const XInsigth = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about E-Charge</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
  )
}

export default XInsigth
