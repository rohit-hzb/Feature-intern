import "./Skills.css";
const skills = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  {name:"Node.js",icon:"/icons/node.png"},
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((skill, i) => (
          <div className="card" key={i}>
            <img src={skill.icon} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
