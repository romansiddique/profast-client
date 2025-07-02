import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Root
      }
    ]
  }
])