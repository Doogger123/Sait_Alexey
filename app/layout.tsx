import "./globals.css";

export const metadata = {
  title: "Алексей Евсеев — КПРФ",
  description: "Кандидат в депутаты от партии КПРФ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
