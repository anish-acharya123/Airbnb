import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import CategoryNavbar from "../Layout/CategoryNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen   ">
      <div className="sticky top-0 bg-white z-30">
        <Navbar />
        <CategoryNavbar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
