import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }) {
    return (
        <motion.section 
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10"
        > 
            {children}
        </motion.section>
    );
}