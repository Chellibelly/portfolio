import "./styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Chelsea Vidrine | Product Designer",
  description: "Product designer and front-end engineer focused on UX, complex workflows, and high-volume digital product experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playpen+Sans:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Script id="gtm-data-layer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M9BLS6W6"
          strategy="afterInteractive"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
