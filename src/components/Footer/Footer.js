import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { footerVariants } from "../../utils/motion";
import { socials } from "../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import img_main from '../images/img_main.png'

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the E-Charge
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <img
              src={img_main}
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Enter E-Charge
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">E-Charge</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 - 2024 E-Charge. All rights reserved.
            </p>
   
            <div className="flex gap-4">
              {/* {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))} */}
            <FontAwesomeIcon icon={faTwitter} bounce style={{color: "white",fontSize:"2rem"}} />
              <FontAwesomeIcon icon={faInstagram} bounce style={{color: "white",fontSize:"2rem"}} />
              <FontAwesomeIcon icon={faSquareFacebook} bounce style={{color: "white",fontSize:"2rem"}}/>
              <FontAwesomeIcon icon={faLinkedin} bounce style={{color: "white",fontSize:"2rem"}} />

            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
