import MainHeader from "@/components/MainHeader/MainHeader";
import "./globals.css";

export const metadata = {
  title: "Tyler Mason's Portfolio",
  description: "Tyler Mason's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page flex column border-box no-margin">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
