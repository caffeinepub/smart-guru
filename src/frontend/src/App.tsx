import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { ClassesPage } from "@/pages/ClassesPage";
import { EntranceExamsPage } from "@/pages/EntranceExamsPage";
import { HomePage } from "@/pages/HomePage";
import { SearchPage } from "@/pages/SearchPage";
import { SubjectPage } from "@/pages/SubjectPage";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const classesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/classes",
  component: ClassesPage,
});

const subjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/classes/$classId/$subjectId",
  component: SubjectPage,
});

const entranceExamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/entrance-exams",
  component: EntranceExamsPage,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  classesRoute,
  subjectRoute,
  entranceExamsRoute,
  searchRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
