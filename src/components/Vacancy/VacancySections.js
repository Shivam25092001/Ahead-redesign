"use client";
import { vacancySectionData } from "../constants/Vacancy_data";
import Vacancy_Card from "./VacancyCard";
import { motion } from "framer-motion";

const Vacancy_Section = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="md:px-40 flex mb-10 mt-40 flex-col w-[100%] gap-8"
    >
      <div className="flex md:justify-start justify-center items-start">
        <motion.h1
          initial={{ x: "-200", scale: 0, opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="md:text-4xl text-2xl font-bold text-black md:ml-2 md:text-start text-center"
        >
          Open Vacancies{" "}
        </motion.h1>{" "}
      </div>{" "}
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-4">
        {" "}
        {vacancySectionData.map((item, index) => (
          <Vacancy_Card
            key={index}
            title={item.title}
            position={item.position}
            location={item.location}
            salary={item.salary}
          />
        ))}{" "}
      </div>{" "}
    </motion.section>
  );
};

export default Vacancy_Section;