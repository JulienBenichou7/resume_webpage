export default function About() {
  const skills = [
    "Consultancy",
    "Agile Management",
    "Project Planning",
    "Risk Assessment",
    "Adaptability",
    "Machine Learning",
    "Full-stack development",
    "Data Analysis",
    "Problem Solving",
  ];
  const technicalSkills = [
    "C#/.NET",
    "Node.js/React.js",
    "HTML/CSS",
    "JavaScript/TypeScript",
    "Playwright/Postman",
    "SQL",
    "CI/CD",
    "Python",
    "Pandas/Matplotlib",
    "Scikit-learn/TensorFlow",
    "AWS Cloud",
    "Tableau/Power BI",
    "AzureDevOps/GIT",
  ];

  return (
    <section className="py-32 px-8 bg-surface" id="about">
      <div className="max-w-2xl mx-auto">
        <p className="text-3xl font-bold mb-6 uppercase mb-12 tracking-[0.02em]">
          About
        </p>
        <div className="flex gap-16 items-start">
          <div className="shrink-0 flex gap-12">
            <div>
              <p className=" uppercase tracking-[0.15em] text-secondary font-semibold mb-8">
                Technical Skills
              </p>
              <ul className="flex flex-col gap-4">
                {technicalSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-small hover:text-secondary transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className=" uppercase tracking-[0.15em] text-secondary font-semibold mb-8">
                Skills
              </p>
              <ul className="flex flex-col gap-4">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-small hover:text-secondary transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed">
              PARAGRAPH ABOUT MYSELF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
