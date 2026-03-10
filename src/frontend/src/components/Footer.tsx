import { GraduationCap } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;
  return (
    <footer className="border-t border-border bg-white mt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="font-heading font-bold text-foreground">
            Smart Guru
          </span>
          <span className="text-muted-foreground text-sm">
            — Your Smart Learning Companion
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {year}. Built with ❤️ using{" "}
          <a
            href={utm}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
