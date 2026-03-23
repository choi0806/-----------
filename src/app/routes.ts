import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomeScreen } from "./components/HomeScreen";
import { ProtectScreen } from "./components/ProtectScreen";
import { PremiumScreen } from "./components/PremiumScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { GalleryScreen } from "./components/GalleryScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "protect", Component: ProtectScreen },
      { path: "premium", Component: PremiumScreen },
      { path: "settings", Component: SettingsScreen },
      { path: "gallery", Component: GalleryScreen },
    ],
  },
]);
