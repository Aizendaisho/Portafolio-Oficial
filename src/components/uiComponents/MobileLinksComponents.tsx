import { motion } from "framer-motion";
import { menuLinksVariants } from "../../animation";
import { MobilLinks } from "../../interfaces";

export const MobileLinks = ({ title, href, onClick }: MobilLinks) => {
    return (
      <motion.div
        variants={menuLinksVariants}
        initial="initial"
        animate="open"
        className="flex flex-col items-center hover:underline transition-transform"
        onClick={onClick}
      >
        <a href={`#${href}`} className="text-lg font-bold text-center">
          {title}
        </a>
      </motion.div>
    );
  };