// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// service data
export const serviceData = [];

// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";

const projectNames = ["Nyaya Sanchalak - Smart India Hackathon 2023 Final project", "Calm Space - Seeking Meditation through digital means", "Project DH - My first freelancing project", "Job Hive - A job portal for the future"];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projectNames[0]);

  const handleSlideChange = (activeIndex) => {
    setActiveProject(projectNames[activeIndex]);
  };

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-0">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12 mt-24"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mb-4"
            >
              {activeProject}
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider onSlideChange={handleSlideChange} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
