import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 p-3"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between max-w-screen-sm mx-auto border border-white/20 backdrop-blur-sm rounded-full py-3 px-4">
        <button className="flex gap-4 items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
            <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <div className="font-bold flex gap-1 text-white">
            <span className="hidden md:block">Mega.com</span>
            <span className="md:hidden">Mega</span>
          </div>
        </button>

        {/* Menu */}
        <div className="flex gap-4 md:gap-8 text-sm font-semibold">
          <button className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">
            Developer
          </button>
          <button className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">
            Creator
          </button>
          <button className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
