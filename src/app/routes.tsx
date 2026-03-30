import { createBrowserRouter, useNavigate, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { HomeScreen } from "./components/HomeScreen";
import { ProtectScreen } from "./components/ProtectScreen";
import { PremiumScreen } from "./components/PremiumScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { GalleryScreen } from "./components/GalleryScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { LoginScreen } from "./components/LoginScreen";

function OnboardingRoute() {
  const navigate = useNavigate();
  return <OnboardingScreen onComplete={() => navigate("/")} />;
}

function LoginRoute() {
  const navigate = useNavigate();
  return <LoginScreen onLogin={() => navigate("/")} />;
}

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
      { path: "*", Component: () => <Navigate to="/" replace /> }
    ],
  },
  { path: "/onboarding", Component: OnboardingRoute },
  { path: "/login", Component: LoginRoute },
  { path: "*", Component: () => <Navigate to="/" replace /> },
]);
