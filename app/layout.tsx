// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="font-sans text-white">
      <body>{children}</body>
    </html>
  );
}
