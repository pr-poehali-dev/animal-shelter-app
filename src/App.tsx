import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import FoundAnimalPage from "@/pages/FoundAnimalPage";
import SupportPage from "@/pages/SupportPage";
import AboutPage from "@/pages/AboutPage";
import AnimalDetailPage from "@/pages/AnimalDetailPage";
import NotFound from "@/pages/NotFound";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<AnimalDetailPage />} />
            <Route path="/found" element={<FoundAnimalPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
