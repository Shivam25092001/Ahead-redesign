"use client";
import "../../app/globals.css";
import { motion } from "framer-motion";

const Team_Ahead_Signature = () => {
  const text = "Team Ahead";
  return (
    <motion.div
      className="text handwritten"
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.4,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Team_Ahead_Signature;