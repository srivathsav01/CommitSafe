import { motion } from "framer-motion";

function Button({name, handleClick, className, children}: {name?: string, handleClick: ()=>void, className?: string, children?: React.ReactNode}) {
    return (
        <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-bglight text-white dark:text-black px-4 py-2 rounded-lg cursor-pointer ${className}`}
                    onClick={handleClick}>
                     {children} {name}
        </motion.button>
     );
}

export default Button;