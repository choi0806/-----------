import { createBrowserRouter, useNavigate, Navigate, Outlet, useRouteError } from "react-router";
import { Layout } from "./components/Layout";
import { HomeScreen } from "./components/HomeScreen";
import { ProtectScreen } from "./components/ProtectScreen";
import { PremiumScreen } from "./components/PremiumScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { GalleryScreen } from "./components/GalleryScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SplashScreen } from "./components/SplashScreen";
import { ProtectProvider } from "./components/ProtectContext";
import { AdminScreen } from "./components/AdminScreen";

function OnboardingRoute() {
  const navigate = useNavigate();
  return <OnboardingScreen onComplete={() => navigate("/login", { replace: true })} />;
}

function LoginRoute() {
  const navigate = useNavigate();
  return <LoginScreen onLogin={() => navigate("/home", { replace: true })} />;
}

function ProtectLayout() {
  return (
    <ProtectProvider>
      <Outlet />
    </ProtectProvider>
  );
}

function MobileLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto h-[100dvh] bg-[#f8f9fa] relative shadow-xl overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

function GlobalErrorBoundary() {
  const error = useRouteError() as any;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
      <p className="text-gray-500 mb-6">{error?.message || "An unexpected error occurred"}</p>
      <button 
        onClick={() => window.location.href = '/'}
        className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium active:scale-95 transition-all"
      >
        Return to Home
      </button>
    </div>
  );
}

export const router = createBrowserRouter([
  { path: "/admin", Component: AdminScreen, errorElement: <GlobalErrorBoundary /> },
  {
    Component: MobileLayout,
    errorElement: <GlobalErrorBoundary />,
    children: [
      { path: "/splash", Component: SplashScreen },
      { path: "/onboarding", Component: OnboardingRoute },
      { path: "/login", Component: LoginRoute },
      {
        path: "/",
        Component: ProtectLayout,
        children: [
          {
            path: "/",
            Component: Layout,
            children: [
              { index: true, Component: () => <Navigate to="/home" replace /> },
              { path: "home", Component: HomeScreen },
              { path: "subscription", Component: PremiumScreen },
              { path: "settings", Component: SettingsScreen },
              { path: "album", Component: GalleryScreen },
            ],
          },
          { path: "photo-select", Component: ProtectScreen },
          { path: "processing", Component: ProtectScreen },
          { path: "result", Component: ProtectScreen },
          { path: "saved", Component: ProtectScreen }
        ]
      },
      { path: "*", Component: () => <Navigate to="/splash" replace /> },
    ]
  }
]);
