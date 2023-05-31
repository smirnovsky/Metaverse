'use client';


import { motion } from "framer-motion";
import { StartSteps, TypingText, TitleText } from "../components";

import styles from '../styles'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { startingFeatures } from '../constants/index';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
      >

      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
