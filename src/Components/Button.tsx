interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self";
}

export default function Link({ children, href, target = "_self" }: LinkProps) {
  return (
    <a
      href={href}
      target={target}
      className="border border-amber-700 text-amber-700 px-6 py-3 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
