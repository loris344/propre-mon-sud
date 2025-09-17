import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";

const NotFound = () => {
  const location = useLocation();
  const seoConfig = useSEO();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a href="/" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
