import { motion } from "framer-motion";
import { titleAnimation } from "../../animation";
import { TitleProps } from "../../interfaces";

export const AnimatedWord = ({ title, animation, isHover }: TitleProps) => {
    return (
      <motion.span
        className="relative whitespace-nowrap"
        variants={titleAnimation}
        initial="rest"
        animate={isHover ? "hover" : "rest"}
      >
        {title.split("").map((letter, index) =>
          letter === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <motion.span
              className="relative inline-block whitespace-nowrap"
              variants={animation}
            >
              {letter}
            </motion.span>
          )
        )}
      </motion.span>
    );
  };