import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};
export const LeftBottom = () => {
    return (
        <>
        
      <motion.svg
        width="735" height="526"
        viewBox="0 0 735 526"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.2}}
      >
        <motion.path
            d="M0 1H127C143.569 1 157 14.4315 157 31V1087"
            
            stroke="black"
            fill="none"
            variants={draw}
                custom={1}
            />
      
      </motion.svg>
      <motion.h1 className="p-0 font-bold text-6xl absolute bottom-56 -left-5 -rotate-90"
      
      >
        About Me
      </motion.h1>
      </>
    );
  }

