import Link from "./Link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-4"
      id="hero"
    >
      <div className="text-2xl uppercase tracking-widest text-secondary">
        Hello, I'm
      </div>
      <h1 className="text-5xl font-bold">Julien Benichou</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        Proficient in C#/.NET, Typescript/React, for full-stack application
        development, as well as Python and SQL for data analysis and machine
        learning. Passionate about building scalable, data-driven solutions and
        solving complex problems that deliver real business impact.
      </p>
      <div className="flex gap-4">
        <Link href="#contact">Contact Me</Link>
        <Link href="/CV-JulienB.pdf" target="_blank">
          View Resume
        </Link>
        <Link
          href="https://www.linkedin.com/in/julien-benichou"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/JulienBenichou7" target="_blank">
          GitHub
        </Link>
      </div>
    </section>
  );
}
