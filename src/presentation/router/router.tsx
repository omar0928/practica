import { Navigate, createBrowserRouter } from "react-router-dom";
import { Proyectos, Detalles } from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const menuRoutes = [
  {
    to: "/proyectos",
    icon: "fa-solid fa-diagram-project",
    title: "proyectos",
    description: "todos los proyectos",
    component: <Proyectos />,
  },
  {
    to: "/detalles/:id",
    icon: "fa-sharp fa-solid fa-circle-info",
    title: "Detalles",
    description: "Detalles de el proyecto",
    component: <Detalles />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
]);
