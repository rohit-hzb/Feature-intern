import "./Services.css"
const services = [
  {
    title: "Frontend Development",
    desc: "Modern UI using React, HTML, CSS & JS",
    icon: "/icons/react.svg",
  },
  {
    title: "Backend Development",
    desc: "APIs & server logic with Node.js & Express",
    icon: "/icons/node.png",
  },
  {
    title: "Database Management",
    desc: "MongoDB & MySQL scalable databases",
    icon: "/icons/mongodb.svg",
  },
  {
    title: "Product Strategy",
    desc: "Planning & scalable product design",
    icon: "/icons/analytical-skills.png",
  },
];

export default function Services() {
  return (
    <section id="Services" className="section">
      <h2>Services</h2>

      <div className="grid">
        {services.map((s, i) => (
          <div className="card" key={i}>
            <img src={s.icon} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
