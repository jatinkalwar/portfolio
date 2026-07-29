import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-12 py-5 bg-background/60 backdrop-blur-md border-b border-border">
      <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
        Jatin Kalwar<span className="text-primary">.</span>
      </Link>
      <div className="flex gap-6">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`text-sm font-medium transition-colors ${
              pathname === l.to
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
