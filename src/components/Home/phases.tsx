import React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function Phases() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Transform scroll progress to background color
  const bgColor4 = useTransform(
    scrollYProgress,
    [0.1, 0.2], // Adjust these values based on actual scroll testing
    ["#FFB727", "rgba(255, 183, 39, 0)"]
  );

  const bgColor3 = useTransform(
    scrollYProgress,
    [0.3, 0.4], // Start later after the first has completed
    ["#FFB727", "rgba(255, 183, 39, 0)"]
  );

  const bgColor2 = useTransform(
    scrollYProgress,
    [0.5, 0.6],
    ["#FFB727", "rgba(255, 183, 39, 0)"]
  );

  const bgColor = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["#FFB727", "rgba(255, 183, 39, 0)"]
  );

  // Animation variants for items appearing
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="pt-4 flex flex-col justify-center items-center" ref={ref}>
      <h1 className="text-4xl sm:text-6xl font-bold text-[#F4F3F3] py-6 underline underline-offset-4 decoration-[#FFB727]">
        Project Roadmap:
      </h1>

      <ul className="timeline timeline-vertical w-full md:w-1/2 py-4">
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          // transition={{ duration: 0.5, delay: index * 0.1 }}
          variants={itemVariants}
          // key={phase}
        >
          <div className="timeline-start timeline-box font-medium">
            <h1 className="text-[#F4F3F3] text-2xl ">Phase 1</h1>
            <p className=" text-sm sm:text-xl">
              {" "}
              Establishment of Design Process & Product Functions.
            </p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-[#FFB727] h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <motion.hr style={{ backgroundColor: bgColor }} />{" "}
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          // transition={{ duration: 0.5, delay: index * 0.1 }}
          variants={itemVariants}
        >
          <motion.hr style={{ backgroundColor: bgColor2 }} />{" "}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-[#FFB727] h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box  font-medium">
            <h1 className="text-[#F4F3F3] text-2xl ">Phase 2</h1>
            <p className=" text-sm sm:text-xl">
              Approval Of Crypto & Blockchain Grant Schemes.
            </p>
          </div>
          <motion.hr style={{ backgroundColor: bgColor3 }} />{" "}
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          // transition={{ duration: 0.5, delay: index * 0.1 }}
          variants={itemVariants}
        >
          <motion.hr style={{ backgroundColor: bgColor4 }} />{" "}
          <div className="timeline-start timeline-box  font-medium">
            {" "}
            <h1 className="text-[#F4F3F3] text-2xl ">Phase 3</h1>
            <p className=" text-sm sm:text-xl">
              {" "}
              Release Bounties and Hiring Positions to Help with
              Development.(Official Links will be released soon).
            </p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-[#FFB727] h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          // transition={{ duration: 0.5, delay: index * 0.1 }}
          variants={itemVariants}
        >
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box  font-medium">
            {" "}
            <h1 className="text-[#F4F3F3] text-2xl ">Phase 4</h1>
            <p className=" text-sm sm:text-xl">
              {" "}
              Deployment of Event Tickets at Hackathons,Crypto Events and
              Gatherings.
            </p>
          </div>
          <hr />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          // transition={{ duration: 0.5, delay: index * 0.1 }}
          variants={itemVariants}
        >
          <hr />
          <div className="timeline-start timeline-box  font-medium">
            <h1 className="text-[#F4F3F3] text-2xl ">Phase 5</h1>
            <p className=" text-xl">TBA.</p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.li>
      </ul>
    </div>
  );
}
