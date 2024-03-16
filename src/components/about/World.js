import React from 'react'
import { motion } from "framer-motion";
import { TypingText,TitleText } from "../custom/CustomText";
import styles from "../../styles";
import {staggerContainer, fadeIn} from "../../utils/motion";
import map from '../images/map.png'
import p1 from '../images/people-01.png'
import p2 from '../images/people-02.png'
import p3 from '../images/people-03.png'


const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track different stations around you and select the best suited one for you </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={map} alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={p1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={p2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={p3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default World
