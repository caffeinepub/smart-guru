import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouter } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Classes", to: "/classes" },
  { label: "Entrance Exams", to: "/entrance-exams" },
  { label: "Search", to: "/search" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
          <img
            src="/assets/generated/smart-guru-logo-transparent.dim_200x200.png"
            alt="Smart Guru Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading font-black text-xl text-primary">
            Smart{" "}
            <span
              className="text-accent-foreground"
              style={{ color: "oklch(0.65 0.18 75)" }}
            >
              Guru
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={"nav.link"}
              className={`px-4 py-2 rounded-md font-body font-semibold text-sm transition-colors ${
                isActive(link.to)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              data-ocid="nav.toggle"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72" data-ocid="nav.sheet">
            <div className="flex items-center gap-2 mb-8 mt-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-heading font-black text-lg text-primary">
                Smart Guru
              </span>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md font-body font-semibold text-sm transition-colors ${
                    isActive(link.to)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
