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
      "A responsive image gallery for browsing and discovering visual content.",
      "Built with modern React patterns and a polished, accessible interface.",
    ],
    image: imageGallery,
    githubUrl: "https://github.com/titsaa/ai-se_image-gallery",
    liveUrl: "#",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    description: [
      "A study tool for creating and reviewing flashcards.",
      "Designed to make learning sessions focused, repeatable, and easy to navigate.",
    ],
    image: flashcards,
    githubUrl: "https://github.com/titsaa/ai-se_project_flashcards",
    liveUrl: "#",
  },
  {
    id: "workspace-hub",
    name: "WorkspaceHub",
    description: [
      "A productivity workspace for organizing projects and daily work.",
      "Uses reusable UI patterns and responsive layouts for an efficient experience.",
    ],
    image: workspaceHub,
    githubUrl: "https://github.com/titsaa/ai-se_project_workspacehub",
    liveUrl: "#",
  },
  {
    id: "mesh-ai",
    name: "MeshAI",
    description: [
      "An AI-focused project exploring connected tools and useful product workflows.",
      "Built as a practical application for experimenting with modern web technologies.",
    ],
    image: meshAi,
    githubUrl: "https://github.com/titsaa/ai-se_project_mesh-ai",
    liveUrl: "#",
  },
];
