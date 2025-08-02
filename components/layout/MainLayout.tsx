import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <main className="mt-32"> {children}</main>
      <Footer />
    </main>
  );
};

export default MainLayout;
