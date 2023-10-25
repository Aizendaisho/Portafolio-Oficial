import { motion } from "framer-motion";
import { TitleLink } from "../../interfaces";
import { useState } from "react";
import { letterAnimation, letterAnimationTwo } from "../../animation";
import { AnimatedWord } from "./AnimatedWord";

export const AnimatedLinks = ({ title }: TitleLink) => {
    const [isHover, setIsHover] = useState(false);
    return (
      <motion.div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative cursor-pointer overflow-hidden"
      >
        <AnimatedWord
          title={title}
          animation={letterAnimation}
          isHover={isHover}
        />
        <div className="absolute top-0">
          <AnimatedWord
            title={title}
            animation={letterAnimationTwo}
            isHover={isHover}
          />
        </div>
      </motion.div>
    );
  };