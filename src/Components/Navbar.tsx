export default function Navbar() {
  const links = ["About", "Experience", "Education", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center bg-cyan-100 transition-all duration-300">
      <ul className="flex gap-10 list-none justify-center w-full">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="font-nav font-bold uppercase tracking-widest
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
