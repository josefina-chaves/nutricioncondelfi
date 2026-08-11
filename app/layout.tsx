import "./globals.css";

export const metadata = {
  title: "Nutrición con Delfi",
  description: "Transformando hábitos, sin dietas restrictivas y con mucho amor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}