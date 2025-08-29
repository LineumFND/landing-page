import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "DAO Landing",
  description: "Own your designs forever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
