import "./globals.css";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";

export const metadata = {
  title: "Next.js Portfolio",
  description: "Shows the work of my codes!",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={outfit.className}
      style={{ backgroundColor: 'black' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
