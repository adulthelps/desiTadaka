import React from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { handleClick } from "../share";
export const About:React.FC = () => {
  return (
    <div className="about">
      <div className="heading1 h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to HotCollection - Your Destination for Erotic and Romantic
          Videos
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          At HotCollection, we pride ourselves on providing a sophisticated and
          tantalizing platform for adults to explore their deepest desires and
          fantasies. Whether you're seeking a touch of romance, an infusion of
          passion, or an exploration of your sensual side, you'll find it all
          right here.
        </motion.p>
      </div>
      <div className="mission h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Our mission is simple yet profound: to curate an exclusive collection
          of erotic, romantic, and adult videos that cater to the diverse tastes
          and preferences of our discerning audience. We believe in celebrating
          the beauty of human sensuality and fostering an environment of
          openness, exploration, and empowerment
        </motion.p>
      </div>
      <div className="sensuality h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          A World of Sensuality
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Step into a world where pleasure knows no bounds. Our extensive
          library features a diverse range of content, including sensual
          romance, steamy erotica, and tantalizing adult videos. From passionate
          encounters to intimate moments, each video is carefully selected to
          ignite your imagination and awaken your senses.
        </motion.p>
      </div>
      <div className="join h-primary">
        <motion.h2
          className="h-secondary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Join Us Today
        </motion.h2>
        <motion.p
          className="p-primary"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to embark on a journey of pleasure and discovery? Join us today
          and experience the thrill of HotCollection for yourself. Whether
          you're indulging in a solo adventure or exploring with a partner,
          you'll find endless possibilities awaiting you. Welcome to a world
          where desire knows no limits. Welcome to HotCollection.
        </motion.p>
      </div>
      <div className="other">
        <button className="share" onClick={handleClick}>
          SHARE
        </button>
      </div>
    </div>
  );
};
