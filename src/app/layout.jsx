import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/provider/NextAuthSessionProvider";
const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html className={`${poppins.className}`}>
      <NextAuthSessionProvider>
      <body className="">{children}</body>

      </NextAuthSessionProvider>
    </html>
  );
};
export default RootLayout;
