import Marquee from "react-fast-marquee";
import SkillItem from "./SkillItem";

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

const SkillMarquee = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Marquee
        gradient={false}
        speed={50}
        direction="left"
        pauseOnHover
        autoFill={true}
        style={{ height: 120 }}
      >
        {skills.slice(0, 6).map((skill) => (
          <div className="mx-[10px]">
            <SkillItem name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </Marquee>

      <Marquee
        gradient={false}
        speed={50}
        direction="right"
        pauseOnHover
        autoFill={true}
        style={{ height: 120 }}
      >
        {skills.slice(6).map((skill) => (
          <div className="mx-[10px]">
            <SkillItem name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillMarquee;
