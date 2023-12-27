import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import WidgetTop from "@/Components/WidgetTop";
import Footer from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algabay AI | Finance and Equity Research Platform",
  description: "Simplified Investment With Algabay",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="top-0 mt-14">
          <WidgetTop />
        </div>

        {children}
      </body>
    </html>
  );
}
