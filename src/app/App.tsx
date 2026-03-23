import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto h-[100dvh] bg-[#f8f9fa] relative shadow-xl overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
