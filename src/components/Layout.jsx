import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-graphite-950">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
