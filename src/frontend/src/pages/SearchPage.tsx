import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  chaptersData,
  classes,
  entranceExams,
  getSubjectsForClass,
} from "@/data/mockData";
import { Link } from "@tanstack/react-router";
import { BookOpen, Search, Trophy, Video } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

type SearchResult = {
  type: "chapter" | "subject" | "exam";
  title: string;
  subtitle: string;
  badge: string;
  link: string;
  icon: string;
};

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Add chapters from all subjects
  for (const [subjectId, chapterList] of Object.entries(chaptersData)) {
    for (const ch of chapterList) {
      results.push({
        type: "chapter",
        title: ch.title,
        subtitle: ch.videoDescription,
        badge: subjectId,
        link: `/classes/9/${subjectId}`,
        icon: "📖",
      });
    }
  }

  // Add subjects from classes
  for (const cls of classes) {
    const subjects = getSubjectsForClass(cls.id);
    for (const s of subjects) {
      results.push({
        type: "subject",
        title: `${s.name} — Class ${cls.id}`,
        subtitle: `${s.name} for Class ${cls.id} students`,
        badge: s.name,
        link: `/classes/${cls.id}/${s.id}`,
        icon: s.icon,
      });
    }
  }

  // Add entrance exams
  for (const exam of entranceExams) {
    results.push({
      type: "exam",
      title: exam.fullName,
      subtitle: exam.description,
      badge: "Entrance Exam",
      link: "/entrance-exams",
      icon: exam.icon,
    });
  }

  return results;
}

const searchIndex = buildSearchIndex();

const typeBadgeColor: Record<string, string> = {
  chapter: "bg-blue-100 text-blue-700",
  subject: "bg-green-100 text-green-700",
  exam: "bg-amber-100 text-amber-700",
};

const typeIcon: Record<string, React.ReactNode> = {
  chapter: <BookOpen className="h-4 w-4" />,
  subject: <Video className="h-4 w-4" />,
  exam: <Trophy className="h-4 w-4" />,
};

export function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          r.badge.toLowerCase().includes(q),
      )
      .slice(0, 20);
  }, [query]);

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading font-black text-4xl text-foreground mb-2 text-center">
          Search
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Find chapters, subjects, and exam topics
        </p>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for a topic, chapter, subject..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 py-6 text-base font-body"
            data-ocid="search.input"
          />
        </div>

        <AnimatePresence mode="wait">
          {query.length >= 2 && results.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
              data-ocid="search.empty_state"
            >
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-muted-foreground font-body">
                No results found for "{query}"
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Try searching for a subject, chapter, or exam name
              </p>
            </motion.div>
          )}

          {results.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-muted-foreground text-sm mb-4">
                {results.length} result{results.length !== 1 ? "s" : ""} for "
                {query}"
              </p>
              <div className="space-y-3" data-ocid="search.list">
                {results.map((result, i) => (
                  <motion.div
                    key={`${result.type}-${result.title}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i }}
                    data-ocid={`search.item.${i + 1}`}
                  >
                    <Link to={result.link}>
                      <Card
                        className="card-hover shadow-card cursor-pointer"
                        data-ocid="search.result.card"
                      >
                        <CardContent className="pt-4 pb-4">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">
                              {result.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-heading font-bold text-base text-foreground">
                                  {result.title}
                                </h3>
                                <span
                                  className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-semibold ${typeBadgeColor[result.type]}`}
                                >
                                  {typeIcon[result.type]}
                                  {result.type.charAt(0).toUpperCase() +
                                    result.type.slice(1)}
                                </span>
                              </div>
                              <p className="text-muted-foreground text-sm mt-1 line-clamp-2 font-body">
                                {result.subtitle}
                              </p>
                              <Badge variant="outline" className="mt-2 text-xs">
                                {result.badge}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {!query && (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-4">📚</div>
              <p className="text-muted-foreground font-body">
                Start typing to search across all subjects and exams
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {[
                  "Mathematics",
                  "Science",
                  "JEE",
                  "NEET",
                  "Polynomials",
                  "French Revolution",
                ].map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-ocid="search.tag.button"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
