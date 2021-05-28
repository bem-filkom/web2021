import React from "react";
import { motion } from "framer-motion";
import Ribbon from "../components/Ribbon/Ribbon";

const Cabinet = () => {
  return (
    <motion.div
      className="bg-gray min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Ribbon
        primaryTitle="STRUKTUR KABINET"
        secondaryTitle="BADAN EKSEKUTIF MAHASISWA 2021"
      />
    </motion.div>
  );
};

export default Cabinet;
