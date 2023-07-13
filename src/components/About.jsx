import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Um pouco</p>
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Nos últimos 5 anos, dediquei-me como <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300">
          atleta profissional de <a href="https://pubg.com" target="_blank">
        <span className="text-transparent hover:brightness-200
         bg-clip-text bg-gradient-to-r border-b font-bold from-violet-400 via-blue-400 to-cyan-300">
          PUBG
        </span>
        </a>
        </span>
         , atuei como IGL <small className="text-[0.7rem]">(In Game Lider)</small> de diversas equipes nacionais e internacionais onde tive o prazer de disputar
         muitos campeonatos e adquirir habilidades valiosas. Agora, trago toda essa experiência   {" "}

         
         
         
         para o mundo do dev,
         onde a determinação, o trabalho em equipe e a capacidade de adaptação são qualidades essenciais para enfrentar desafios e alcançar resultados excepcionais.{" "}
        
      
        

      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
