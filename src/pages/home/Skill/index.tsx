import { SkillContainer } from "./styled";
import SkillMarquee from "./SkillMarquee";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Skill = () => {
  const skillRef = useRef(null);
  const skillMainRef = useRef(null);
  const isInView = useInView(skillRef, { once: true, margin: "-100px" });
  const isInViewMain = useInView(skillMainRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <SkillContainer className="relative w-full min-h-screen flex items-center justify-center py-20 pt-32 overflow-hidden">
      <div className="wrapper">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div
            ref={skillRef}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -500, scale: 0 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, x: 0 }
                  : { opacity: 0, scale: 0, x: -500 }
              }
              transition={{
                duration: 0.5,
              }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium">
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
                    className="lucide lucide-code w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="m16 18 6-6-6-6"></path>
                    <path d="m8 6-6 6 6 6"></path>
                  </svg>
                  5+ Năm Kinh Nghiệm
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                <span className="text-amber-500">FULLSTACK</span>
                <br />
                <span className="text-white/90">REMOTE</span>
                <br />
                <span className="text-white/70">ENGINEER</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                Mình tạo ra những sản phẩm kỹ thuật số bằng khả năng làm việc
                với frontend đến backend, database đến deployment.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <motion.div
                className="group relative p-4 md:p-8 rounded-3xl bg-blue-500/10 border border-blue-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, rotate: -360, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: -360 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
              >
                <div className="text-center space-y-4">
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
                    className="lucide lucide-code-xml w-8 h-8 md:w-12 md:h-12 mx-auto text-blue-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                  <p className="md:text-lg font-bold text-blue-400">Frontend</p>
                </div>
              </motion.div>
              <motion.div
                className="group relative p-4 md:p-8 rounded-3xl bg-green-500/10 border border-green-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, rotate: -360, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: -360 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
              >
                <div className="text-center space-y-4">
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
                    className="lucide lucide-server w-8 h-8 md:w-12 md:h-12 mx-auto text-green-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                  </svg>
                  <p className="md:text-lg font-bold text-green-400">Backend</p>
                </div>
              </motion.div>
              <motion.div
                className="group relative p-4 md:p-8 rounded-3xl bg-purple-500/10 border border-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, rotate: -360, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: -360 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.75,
                }}
              >
                <div className="text-center space-y-4">
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
                    className="lucide lucide-database w-8 h-8 md:w-12 md:h-12 mx-auto text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                  <p className="md:text-lg font-bold text-purple-400">
                    Database
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="group relative p-4 md:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, rotate: -360, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0, rotate: -360 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1,
                }}
              >
                <div className="text-center space-y-4">
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
                    className="lucide lucide-globe w-8 h-8 md:w-12 md:h-12 mx-auto text-amber-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <p className="md:text-lg font-bold text-amber-400">Web3</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div ref={skillMainRef} className="mt-20 text-center">
            <motion.p
              className="text-white/40 text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 100 }}
              animate={
                isInViewMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{
                duration: 0.5,
              }}
            >
              CÔNG NGHỆ CHÍNH
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={
                isInViewMain ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              <SkillMarquee />
            </motion.div>
          </div>
        </div>
      </div>
    </SkillContainer>
  );
};

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export default Skill;
