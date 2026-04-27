export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-4"
      id="hero"
    >
      <div className="text-2xl uppercase tracking-widest text-amber-700">
        Hello, I'm
      </div>
      <h1 className="text-5xl font-bold text-text-base">Julien Benichou</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        Proficient in C#/.NET, Typescript/React, for full-stack application
        development, as well as Python and SQL for data analysis and machine
        learning. Passionate about building scalable, data-driven solutions and
        solving complex problems that deliver real business impact.
      </p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="border border-amber-700 text-amber-700 px-6 py-3 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
        >
          Contact Me
        </a>
        <a
          href="/CV-JulienB.pdf"
          target="_blank"
          className="border border-amber-700 text-amber-700 px-6 py-3 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
