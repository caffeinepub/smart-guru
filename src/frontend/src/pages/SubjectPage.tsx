import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChaptersForSubject, getSubjectsForClass } from "@/data/mockData";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, ExternalLink, Video } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function SubjectPage() {
  const { classId, subjectId } = useParams({ strict: false }) as {
    classId: string;
    subjectId: string;
  };
  const classNum = Number.parseInt(classId || "1");
  const chapters = getChaptersForSubject(subjectId);
  const subjects = getSubjectsForClass(classNum);
  const subject = subjects.find((s) => s.id === subjectId);
  const [activeChapter, setActiveChapter] = useState(chapters[0]?.id || "");
  const currentChapter =
    chapters.find((c) => c.id === activeChapter) || chapters[0];

  if (!subject) {
    return (
      <main className="container mx-auto px-4 py-10">
        <p className="text-muted-foreground">Subject not found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link
          to="/classes"
          className="hover:text-primary transition-colors"
          data-ocid="subject.classes.link"
        >
          Classes
        </Link>
        <span>/</span>
        <span className="text-foreground font-semibold">Class {classId}</span>
        <span>/</span>
        <span className="text-primary font-semibold">{subject.name}</span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <Button
          variant="ghost"
          size="sm"
          asChild
          data-ocid="subject.back.button"
        >
          <Link to="/classes" className="gap-2 flex items-center">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </Button>
        <div className="h-4 w-px bg-border" />
        <span className="text-2xl">{subject.icon}</span>
        <h1 className="font-heading font-black text-2xl text-foreground">
          {subject.name} — Class {classId}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chapter list */}
        <aside className="lg:col-span-1">
          <h2 className="font-heading font-bold text-sm text-muted-foreground uppercase tracking-wider mb-3">
            Chapters
          </h2>
          <div className="space-y-2" data-ocid="subject.chapter.list">
            {chapters.map((ch, i) => (
              <button
                type="button"
                key={ch.id}
                onClick={() => setActiveChapter(ch.id)}
                data-ocid={`chapter.item.${i + 1}`}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${
                  activeChapter === ch.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border hover:border-primary/50 hover:bg-secondary text-foreground"
                }`}
              >
                <span className="font-semibold text-xs opacity-70 block">
                  Ch {i + 1}
                </span>
                {ch.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Chapter content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-3"
          >
            {currentChapter && (
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {subject.name}
                      </Badge>
                      <CardTitle className="font-heading text-xl">
                        {currentChapter.title}
                      </CardTitle>
                    </div>
                    <span className="text-2xl">{subject.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="video" data-ocid="chapter.tab">
                    <TabsList className="mb-6 w-full">
                      <TabsTrigger
                        value="video"
                        className="flex-1 gap-2"
                        data-ocid="chapter.video.tab"
                      >
                        <Video className="h-4 w-4" /> Teaching Video
                      </TabsTrigger>
                      <TabsTrigger
                        value="swadhyaya"
                        className="flex-1 gap-2"
                        data-ocid="chapter.swadhyaya.tab"
                      >
                        <BookOpen className="h-4 w-4" /> Digital Swadhyaya
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="video">
                      <div className="space-y-4">
                        {/* YouTube embed */}
                        <div
                          className="relative w-full rounded-xl overflow-hidden bg-black"
                          style={{ aspectRatio: "16/9" }}
                          data-ocid="chapter.canvas_target"
                        >
                          <iframe
                            key={currentChapter.id}
                            src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
                              `${currentChapter.videoTitle} NCERT`,
                            )}`}
                            title={currentChapter.videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                          />
                        </div>

                        {/* Fallback link */}
                        <div className="flex items-center justify-end">
                          <a
                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                              `${currentChapter.videoTitle} NCERT class`,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                            data-ocid="chapter.primary_button"
                          >
                            Can&apos;t see the video? Watch on YouTube
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>

                        <div className="bg-secondary/50 rounded-lg p-4">
                          <h3 className="font-heading font-bold text-base text-foreground mb-1">
                            {currentChapter.videoTitle}
                          </h3>
                          <p className="text-muted-foreground text-sm font-body">
                            {currentChapter.videoDescription}
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="swadhyaya">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground mb-4 font-body">
                          Practice questions for{" "}
                          <strong>{currentChapter.title}</strong>. Expand each
                          question to see the answer.
                        </p>
                        <Accordion
                          type="single"
                          collapsible
                          className="space-y-2"
                          data-ocid="swadhyaya.list"
                        >
                          {currentChapter.swadhyaya.map((item, idx) => (
                            <AccordionItem
                              key={item.question.slice(0, 20)}
                              value={`q${idx}`}
                              className="border border-border rounded-lg px-4"
                              data-ocid={`swadhyaya.item.${idx + 1}`}
                            >
                              <AccordionTrigger className="font-body font-semibold text-sm text-left hover:no-underline">
                                <span className="flex items-start gap-2">
                                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                                    {idx + 1}
                                  </span>
                                  {item.question}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="font-body text-sm text-muted-foreground pl-7 pb-4">
                                <div className="bg-green-50 border border-green-200 rounded-md p-3 text-green-800">
                                  <strong>Answer:</strong> {item.answer}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
