'use client'
import UI_Image from "../UI_Image/UI_Image"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { timelineConstants } from '../constants/Timeline_data';
import TimeLineComponent from "./TimelineComponent";

const Timeline = () => {
    const timeLineData = timelineConstants
    return (
        <section className="md:px-40 flex flex-col md:mt-28 mt-12 justify-center items-start w-[80%]">
            <motion.p
                initial={{ x: '-200', scale: 0, opacity: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50

                }}
                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className='md:text-md text-sm font-medium text-[#535353] '
            >
                Wrong with self-improvement & how we're fixing it.
            </motion.p>

            <div className='flex'>
                <motion.h1
                    initial={{ x: '-200', scale: 0, opacity: 0 }}
                    transition={{
                        delay: 0.7,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 50

                    }}
                    whileInView={{ x: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className='md:text-4xl text-2xl font-bold  text-black mt-4 inline mb-4 md:mb-1'
                >
                    Self Improvement. Ugh.
                </motion.h1>

                <motion.div
                    initial={{ rotate: -90, x: 400, y: 20 }}
                    whileInView={{
                        rotate: 0,
                        x: 0,
                        y: 0,
                    }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <UI_Image
                        src='/assets/boo-3.png'
                        width={80}
                        height={80}
                        alt="boo"
                        className='rounded-full rotate-[25deg] opacity-90 hidden md:flex'
                    />
                </motion.div>
            </div>

            <div className="flex flex-col w-full">
                <VerticalTimeline
                    layout={'1-column-left'}
                    lineColor={"#C3B6F9"}
                >
                    {
                        timelineConstants.map((item,index)=>(
                            <TimeLineComponent
                            heading = {item.heading}
                            subheading = {item.subheading}
                            key={index}
                            />
                        ))
                    }

                </VerticalTimeline>

            </div>

        </section>
    )
}

export default Timeline