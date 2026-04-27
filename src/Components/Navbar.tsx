export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center">
      <a href="#hero" className="font-serif text-lg tracking-wide w-1/3">
        YN
      </a>
      <ul className="flex gap-10 list-none justify-center w-1/3">
        {["About", "Experience", "Projects", "Contact"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="font-nav font-bold text-text-base uppercase tracking-widest
             **: hover:text-amber-700 transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
