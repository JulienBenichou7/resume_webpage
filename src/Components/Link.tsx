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
      className="border border-secondary text-secondary px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
