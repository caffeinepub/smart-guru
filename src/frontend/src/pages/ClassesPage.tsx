import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { classes, getSubjectsForClass } from "@/data/mockData";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type View = "classes" | "subjects";

export function ClassesPage() {
  const [view, setView] = useState<View>("classes");
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const classColors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-orange-400 to-orange-600",
    "from-rose-400 to-rose-600",
    "from-cyan-400 to-cyan-600",
    "from-amber-400 to-amber-600",
    "from-indigo-400 to-indigo-600",
    "from-teal-400 to-teal-600",
    "from-pink-400 to-pink-600",
    "from-violet-400 to-violet-600",
    "from-red-400 to-red-600",
  ];

  if (view === "subjects" && selectedClass !== null) {
    const subjects = getSubjectsForClass(selectedClass);
    return (
      <main className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView("classes")}
            data-ocid="classes.back.button"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> All Classes
          </Button>
          <div className="h-4 w-px bg-border" />
          <h1 className="font-heading font-black text-2xl text-foreground">
            Class {selectedClass} — Subjects
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07 * i }}
              data-ocid={`subject.item.${i + 1}`}
            >
              <Link
                to="/classes/$classId/$subjectId"
                params={{
                  classId: String(selectedClass),
                  subjectId: subject.id,
                }}
              >
                <Card
                  className="card-hover shadow-card cursor-pointer"
                  data-ocid={`subject.card.${i + 1}`}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{subject.icon}</span>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-foreground">
                          {subject.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Class {selectedClass}
                        </p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          <BookOpen className="h-3 w-3 mr-1" /> 5 Chapters
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="font-heading font-black text-4xl text-foreground mb-3">
          Browse by Class
        </h1>
        <p className="text-muted-foreground text-lg">
          Select your class to explore subjects and chapters
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {classes.map((cls, i) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * i }}
            data-ocid={`class.item.${i + 1}`}
          >
            <button
              type="button"
              className="w-full"
              onClick={() => {
                setSelectedClass(cls.id);
                setView("subjects");
              }}
              data-ocid={`class.button.${i + 1}`}
            >
              <Card className="card-hover shadow-card cursor-pointer overflow-hidden">
                <div
                  className={`h-24 bg-gradient-to-br ${classColors[i]} flex items-center justify-center`}
                >
                  <span className="font-heading font-black text-white text-2xl">
                    {cls.id}
                  </span>
                </div>
                <CardContent className="py-3 text-center">
                  <span className="font-heading font-bold text-sm text-foreground">
                    {cls.label}
                  </span>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {getSubjectsForClass(cls.id).length} Subjects
                  </div>
                </CardContent>
              </Card>
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
