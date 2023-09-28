"use client";
import { motion } from "framer-motion";
import Team_Ahead_Signature from "./Signature";
import "../../app/globals.css";
import { messageData } from "../constants/Message_data";

const Message = () => {
  return (
    <section className="md:px-24 px-4 flex justify-center items-center mt-40 message-section w-9/12">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center gap-3"
      >
        <p className="text-[#333333] text-sm font-semibold ">
          
          {messageData[0]}
        </p>
        <h1 className="font-bold text-3xl text-black"> {messageData[1]} </h1>
        <p className="text-lg font-semibold text-[#535353] message">
          {messageData[2]}
        </p>
        <div className="flex justify-center items-center text-center">
          <p className="text-[#363636] text-sm font-semibold inline mt-2 mb-2">
            
            {messageData[3]}
          </p>
          <Team_Ahead_Signature />
        </div>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center bg-black text-[#f3f3f3] rounded-[50px] py-3 px-6 shadow-2xl mt-2 duration-300 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          Start a test
        </motion.button>
        <p className="text-[#808080] text-sm font-medium ">
          
          {messageData[4]}
        </p>
      </motion.div>
    </section>
  );
};

export default Message;