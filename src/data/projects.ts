import type { Project } from "../types";
import imageGallery from "../assets/projects/image-gallery.svg";
import flashcards from "../assets/projects/flashcards.svg";
import workspaceHub from "../assets/projects/workspacehub.svg";
import meshAi from "../assets/projects/mesh-ai.svg";

export const projects: Project[] = [
  {
    id: "image-gallery",
    name: "Image Gallery",
    description: [
      "A responsive gallery for browsing and viewing image collections across any screen size.",
      "Built with reusable React components, semantic markup, and accessible keyboard navigation.",
    ],
    image: imageGallery,
    githubUrl: "https://github.com/titsaa/ai-se_image-gallery",
    liveUrl: "#",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    description: [
      "A study app for creating flashcard decks and reviewing them in focused sessions.",
      "Manages deck and card state cleanly so study progress stays predictable and easy to follow.",
    ],
    image: flashcards,
    githubUrl: "https://github.com/titsaa/ai-se_project_flashcards",
    liveUrl: "#",
  },
  {
    id: "workspace-hub",
    name: "WorkspaceHub",
    description: [
      "A productivity dashboard for organizing projects, tasks, and daily work in one place.",
      "Composed from reusable UI patterns with a responsive layout that adapts from desktop to mobile.",
    ],
    image: workspaceHub,
    githubUrl: "https://github.com/titsaa/ai-se_project_workspacehub",
    liveUrl: "#",
  },
  {
    id: "mesh-ai",
    name: "MeshAI",
    description: [
      "An AI-powered application that connects tools into practical, user-focused product workflows.",
      "Built with React and TypeScript, with ESLint and continuous integration enforcing code quality.",
    ],
    image: meshAi,
    githubUrl: "https://github.com/titsaa/ai-se_project_mesh-ai",
    liveUrl: "#",
  },
];
