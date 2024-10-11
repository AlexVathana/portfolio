import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const FeedbackCard = ({
  index,
}) => (



  
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[800px] w-full'
  >

    <div className='mt-1 '>
      <div className='mt-1 text-white tracking-wider text-[18px] flex'>
       <a  className=" text-blue-400 hover:text-blue-600 transition-colors duration-200" href="https://www.linkedin.com/in/phouvadeth-vathana-197a2a2a2/" target="_blank">Linkedin:&nbsp; </a>
       <a className="hover:text-gray-600 " href="https://www.linkedin.com/in/phouvadeth-vathana-197a2a2a2/" target="_blank">Phouvadeth Vathana</a>
        </div>

      <div className='mt-5 text-white tracking-wider text-[18px] flex'>
       <a  className=" text-blue-400 hover:text-blue-600 transition-colors duration-200" href="https://github.com/AlexVathana" target="_blank">GitHub:&nbsp; </a>
       <a className="hover:text-gray-600 " href="https://github.com/AlexVathana" target="_blank">AlexVathana</a>
        </div>
        <div className='mt-5 text-white tracking-wider flex  text-[18px]'>
        <p className="text-blue-400">Email:&nbsp;</p>
        <p>p.vathana2004@gmail.com</p>
        </div> 
    </div>



  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Contact</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "contact");