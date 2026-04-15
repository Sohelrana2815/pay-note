import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main content area constrained to max-w-7xl */}
      <main className="grow w-full max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
      {/* Footer is full width by default */}

      <Footer />
    </div>
  );
};

export default MainLayout;
