import React from 'react'
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({index, title,icon}) =>{
  return(
    <p>{title}</p>

  )
}

const About = () => {
  return (
    <>
    <motion.dev variants={textVariant()}>
    <p className={styles.sectionSubText}>introduction</p>
    <h2 className={styles.sectionHeadText}>Overview. </h2>
    </motion.dev>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    As an undergraduate student majoring in Computer Science at Dallas Baptist University, set to graduate in Spring 2025, I am passionate about learning and applying new technologies to create innovative solutions. As a Web Developer I am driven by a desire to solve complex problems and contribute to meaningful projects that make a difference.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) =>(<ServiceCard
      key={service.title} index={index} {...service}
      
      
      
      />))}

    </div>
    </>
  )
}

export default About