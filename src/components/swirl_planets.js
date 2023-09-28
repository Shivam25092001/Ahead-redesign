import React from "react";
import { motion } from "framer-motion";
import UI_Image from "./UI_Image/UI_Image";

const SwirlingPlanets = () => {
  const arr = ["top", "right", "bottom", "left"];

  return (
    <div className="flex flex-1 justify-center items-center relative px-4 py-2">
      {/* dotted circle path */}
      <div className="absolute hidden md:flex  h-[450px] w-[450px] rounded-full border-4 border-dashed border-[#f6f6fd] justify-center items-center z-0 ">
        <div className="absolute h-72 w-72  rounded-full bg-[#DED6F8] "></div>
      </div>

      {/* Planet images following circular path */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          initial={{ rotate: 0 + index * 30 }}
          animate={{ rotate: 360 + index * 30 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          className={`z-10 absolute ${arr[index]}-0  ${
            index % 2 == 0 ? 1 : -1
          }rotate-45`}
        >
          <UI_Image src="/assets/boo.png" width={75} height={75} alt="planet" />
        </motion.div>
      ))}

      {/* Phone */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center z-10 "
      >
        <UI_Image
          src="/assets/mobile.png"
          width={300}
          height={300}
          alt="mobile"
          className="md:scale-100 scale-75"
        />
      </motion.div>
    </div>
  );
};

export default SwirlingPlanets;
