import { motion } from "framer-motion";
import { X } from "lucide-react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring" as const,
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const Modal = ({ handleClose, children } : { handleClose: () => void; children: React.ReactNode; }) => {

  return (
    <motion.div
      onClick={handleClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* {(
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient px-4 pt-4"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CloseButton onClick={handleClose} />
          {children}
        </motion.div>
      )} */}
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient px-4 pt-4 min-h-[50%] laptop:min-h-[300px] min-w-[40%] max-w-[70%]"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
        <CloseButton onClick={handleClose} />
          {children}
        </motion.div>
    </motion.div>
  );
};

const CloseButton = ({ onClick }: { onClick: () => void; }) => (
  <motion.button
    className="fixed top-2 right-2"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <X size={32} color="red" strokeWidth={3}/>
  </motion.button>
);

export default Modal;