import { motion } from "framer-motion";


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};
export const TopRight = () => {
    return (
      <motion.svg
        width="735" height="526"
        viewBox="0 0 735 526"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.1}}
        
      >
        <motion.path
            d="M0 1 H674 A30 30 0 0 1 704 31 V525" // Moves to (0, 1) and creates a horizontal line to (704, 1)
            stroke="black"
            fill="none"
            variants={draw}
                custom={0.01}
            />
      
      </motion.svg>
    );
  }