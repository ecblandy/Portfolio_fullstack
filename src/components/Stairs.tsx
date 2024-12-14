import { motion } from "framer-motion";

// Variants
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reverse index fot staggred delay

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

export default function Stairs() {
  return (
    <>
      {/* 
Renderiza 6 divs de movimento, cada um representando um degrau da escada
Cada div terá a mesma animação definida pelo objeto stairsAnimation
O atraso para cada div é calculado sinamicamente com base em seu índice reverso,
Criando um efeito escalonado com atraso decrescente para cada degrau subsequente
      */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative "
          ></motion.div>
        );
      })}
    </>
  );
}
