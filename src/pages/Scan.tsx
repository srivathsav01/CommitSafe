import { useState } from "react";
import { useUser } from "../contexts/UserContexts";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../components/Modal";
import ScanForm from "../components/ScanForm";

function Scan() {

    const {user} = useUser();
    const [modalOpen, setModalOpen] = useState(false);
    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);
    return ( 
        <>
        { user ?
            <div className="text-center text-2xl mt-10">Scan Page Coming Soon!</div>
            :
            <div className="text-center text-2xl mt-10">Please sign in to get Repos from your GitHub account</div>
        }
        <div className="text-center mt-10 border-b mx-20">        
        </div>
        <div className="text-center mt-10">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-bglight text-white dark:text-black px-4 py-2 rounded-lg cursor-pointer"
                    onClick={open}>
                    Scan Manually
                </motion.button>
        </div>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && 
                    <Modal handleClose={close}>
                        <ScanForm />
                    </Modal>}
            </AnimatePresence>
        </>
     );
}

export default Scan;