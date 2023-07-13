import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <motion.div
          className="marquee"
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          <span
            className="border-t-2 border-b-2 lg:text-7xl text-4xl font-extrabold transition-all opacity-5
          bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent
          "
          >
            50%POWERED-BY-GAMES {' '} 〰 {' '} 50%POWERED-BY-KNOWLEDGE {' '} 〰 {' '}
          </span>
          <span
            className="border-t-2 border-b-2 lg:text-7xl text-4xl font-extrabold transition-all opacity-5
          bg-gradient-to-r from-green-400 via-blue-400 to-violet-500 bg-clip-text text-transparent"
          >
            50%POWERED-BY-GAMES {' '} 〰 {' '} 50%POWERED-BY-KNOWLEDGE {' '} 〰 {' '} 
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
