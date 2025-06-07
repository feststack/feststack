// app/layout.tsx

import './globals.css'

export default function RootLayout({ children, locale }: { children: React.ReactNode, locale: string }) {
    return (
      <html lang={locale}>
        <body>{children}</body>
      </html>
    )
  }
  
