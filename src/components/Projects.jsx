import "./Projects.css"
const projects = [
  {
    title: "Doctor Appointment App",
    desc: "React + Node + MongoDB",
    icon: "/icons/react.svg",
  },
  {
    title: "Portfolio Website",
    desc: "React + CSS",
    icon: "/icons/nextjs.png",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="section">
      <h2>Recent Works</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.icon} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
