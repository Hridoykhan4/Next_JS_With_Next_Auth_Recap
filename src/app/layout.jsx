import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/provider/NextAuthSessionProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html className={`${poppins.className}`}>
      <NextAuthSessionProvider>
        <body className="">
          <Toaster position="top-right" />
          <header>
            <Navbar></Navbar>
          </header>
          <main>
            {children}
          </main>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
};
export default RootLayout;
