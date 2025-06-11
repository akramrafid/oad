
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-transparent">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-foreground/70 mb-8">Oops! Page not found</p>
          <a href="/" className="btn-neumorphic">
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
