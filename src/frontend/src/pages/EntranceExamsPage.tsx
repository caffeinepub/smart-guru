import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { entranceExams } from "@/data/mockData";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function EntranceExamsPage() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const exam = entranceExams.find((e) => e.id === selectedExam);

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="font-heading font-black text-4xl text-foreground mb-3">
          Entrance Exam Courses
        </h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive preparation for India's top competitive exams
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!selectedExam ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {entranceExams.map((exam, i) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                data-ocid={`exam.item.${i + 1}`}
              >
                <Card
                  className="card-hover shadow-card cursor-pointer overflow-hidden"
                  onClick={() => setSelectedExam(exam.id)}
                  data-ocid={`exam.card.${i + 1}`}
                >
                  <div
                    className={`h-28 bg-gradient-to-br ${exam.color} flex items-center justify-center`}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl mb-1">{exam.icon}</div>
                      <div className="font-heading font-black text-2xl">
                        {exam.name}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-heading text-lg">
                      {exam.fullName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm font-body mb-3">
                      {exam.description}
                    </p>
                    <Badge variant="secondary">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {exam.topics.length} Topics
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedExam(null)}
                className="gap-2"
                data-ocid="exam.back.button"
              >
                <ArrowLeft className="h-4 w-4" /> All Exams
              </Button>
              <div className="h-4 w-px bg-border" />
              <span className="text-2xl">{exam?.icon}</span>
              <h2 className="font-heading font-black text-2xl text-foreground">
                {exam?.fullName}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1 shadow-card">
                <div
                  className={`h-32 bg-gradient-to-br ${exam?.color} rounded-t-lg flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="text-5xl mb-1">{exam?.icon}</div>
                    <div className="font-heading font-black text-3xl">
                      {exam?.name}
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm font-body">
                    {exam?.description}
                  </p>
                  <div className="mt-4">
                    <Badge
                      className="w-full justify-center py-2"
                      variant="secondary"
                    >
                      {exam?.topics.length} Study Topics Covered
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    Study Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2" data-ocid="exam.topics.list">
                    {exam?.topics.map((topic, i) => (
                      <div
                        key={topic}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                        data-ocid={`exam.topic.item.${i + 1}`}
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-foreground">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
