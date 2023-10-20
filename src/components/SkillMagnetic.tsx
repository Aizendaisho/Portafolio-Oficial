import React,{useRef, useState} from 'react'
import { motion } from 'framer-motion';
import { ChildrenProps, statePosition } from '../interfaces';

function SkillMagnetic({children}: ChildrenProps) {
    const ref = useRef<null | HTMLDivElement>(null);
    const [position, setPosition] = useState<statePosition>({x:0, y:0});
    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const {clientX, clientY} = e
        if (ref){
          const position =  ref.current?.getBoundingClientRect()
          const {width,height,left, top} = position as DOMRect
          const x = clientX - (left + width/2)
          const y = clientY - (top + height/2)
          setPosition({x,y})
        }

    }
    const mouseLeave = () => {
        setPosition({x:0, y:0})
    }
    
    const { x, y } = position
  return (
    <motion.div
    onMouseMove={mouseMove}
    onMouseLeave={mouseLeave}
    animate={{x , y}}
    ref={ref}
    >
        {children}
    </motion.div>
  )
}

export default SkillMagnetic