'use Client'
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useScroll,useTransform } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const TimeLineComponent = (props) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1","3.7 1"]
    })
    useTransform(scrollYProgress, [0, 0.5, 0],[0, 1, 0]);
  return (
    <>
        <motion.section ref = {ref} style={{
            opacity:scrollYProgress
        }}>
        <VerticalTimelineElement
                        className="vertical-timeline-element--education visible timeline-items"
                        contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius: '15px' }}
                        iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
                        icon={<span className="visible">💜</span>}
                        iconClassName='flex justify-center items-center '
                    >
                        <h3 className="vertical-timeline-element-title text-black font-semibold text-lg visible">
                            {props.heading}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm visible">
                            {props.subheading}
                        </h4>
        </VerticalTimelineElement>
        </motion.section>
    </>
  )
}

export default TimeLineComponent