/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const SectionHeader = ({ subtitle, title, titlePera }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
              {subtitle}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            {title}
          </h2>
        </div>

        <div className="text-left md:text-right">
          <p className="text-slate-500 font-medium max-w-xs md:ml-auto">
            {titlePera}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
