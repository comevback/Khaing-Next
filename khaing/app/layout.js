import { Inter } from "next/font/google";
import "./styles/globals.css";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khaing",
  description: "Personal website of Khaing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <Sidebar />
          <div className="main-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
