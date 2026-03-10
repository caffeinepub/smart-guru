import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Search,
  Star,
  Trophy,
  Video,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "12", label: "Grades", icon: "🎓" },
  { value: "7+", label: "Subjects", icon: "📚" },
  { value: "1000+", label: "Chapters", icon: "📖" },
  { value: "5", label: "Entrance Exams", icon: "🏆" },
];

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Digital Textbooks",
    description:
      "Complete NCERT & state board books for Class 1-12, all subjects.",
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "AI Video Lessons",
    description: "Chapter-wise teaching videos with AI-generated explanations.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Digital Swadhyaya",
    description: "Interactive exercises and answers for every chapter.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Entrance Exam Prep",
    description: "Comprehensive courses for JEE, NEET, UPSC, SSC & CAT.",
  },
];

const featuredSubjects = [
  {
    emoji: "📐",
    name: "Mathematics",
    classes: "Class 1-12",
    chapters: "60 Chapters",
  },
  {
    emoji: "🔬",
    name: "Science",
    classes: "Class 1-12",
    chapters: "60 Chapters",
  },
  {
    emoji: "📖",
    name: "English",
    classes: "Class 1-12",
    chapters: "60 Chapters",
  },
  {
    emoji: "🌍",
    name: "Social Studies",
    classes: "Class 1-12",
    chapters: "60 Chapters",
  },
  {
    emoji: "🇮🇳",
    name: "Hindi",
    classes: "Class 1-12",
    chapters: "60 Chapters",
  },
  {
    emoji: "💻",
    name: "Computer Science",
    classes: "Class 8-12",
    chapters: "25 Chapters",
  },
];

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-28 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🇮🇳 India's Smartest Learning Platform
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-6xl mb-4 leading-tight">
              Your Smart Learning
              <br />
              <span style={{ color: "oklch(0.85 0.16 75)" }}>Companion</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Master every subject from Class 1 to 12 with AI-powered video
              lessons, digital swadhyaya, and complete entrance exam
              preparation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="font-heading font-bold text-base"
                style={{
                  background: "oklch(0.78 0.14 75)",
                  color: "oklch(0.18 0.05 50)",
                }}
                asChild
                data-ocid="hero.primary_button"
              >
                <Link to="/classes">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-heading font-bold text-base border-white/40 text-white hover:bg-white/10 hover:text-white"
                asChild
                data-ocid="hero.secondary_button"
              >
                <Link to="/entrance-exams">Entrance Exams</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border py-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="font-heading font-black text-3xl text-primary">
                  {s.value}
                </div>
                <div className="text-muted-foreground font-body text-sm">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="font-heading font-black text-3xl text-center text-foreground mb-10">
            Everything You Need to Excel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <Card className="h-full card-hover shadow-card">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                      {f.icon}
                    </div>
                    <CardTitle className="font-heading text-lg">
                      {f.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm font-body">
                      {f.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-black text-3xl text-center text-foreground mb-10">
            What Would You Like to Study?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/classes" data-ocid="home.classes.link">
              <Card className="card-hover shadow-card cursor-pointer h-full group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Browse by Grade
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Class 1 to 12 — all subjects and chapters
                  </p>
                  <div className="mt-4 text-primary font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/entrance-exams" data-ocid="home.exams.link">
              <Card className="card-hover shadow-card cursor-pointer h-full group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Entrance Exams
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    JEE, NEET, UPSC, SSC & CAT preparation
                  </p>
                  <div className="mt-4 text-primary font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/search" data-ocid="home.search.link">
              <Card className="card-hover shadow-card cursor-pointer h-full group">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Search Topics
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Find any chapter, subject, or exam topic instantly
                  </p>
                  <div className="mt-4 text-primary font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Search <Search className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Subjects */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="font-heading font-black text-3xl text-center text-foreground mb-10">
            Featured Subjects
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredSubjects.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.07 * i }}
              >
                <Link to="/classes" data-ocid="home.subject.link">
                  <Card className="card-hover shadow-card cursor-pointer text-center">
                    <CardContent className="pt-6 pb-4">
                      <div className="text-3xl mb-2">{s.emoji}</div>
                      <div className="font-heading font-bold text-sm text-foreground">
                        {s.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {s.classes}
                      </div>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {s.chapters}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
