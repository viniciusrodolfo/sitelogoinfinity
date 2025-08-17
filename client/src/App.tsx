import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree"; // ou "./routeTree.gen" / "./routes"

const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL, // ⬅️ importante para rodar em /metodologoinfinity/
});

// Necessário para tipagem do TanStack
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
