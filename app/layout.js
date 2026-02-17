import "./globals.css";

export const metadata = {
  title: "Smaran Basnet | Digital Marketing Specialist",
  description:
    "Digital Marketing Specialist & Business Growth Strategist helping automobile and eCommerce businesses grow through performance marketing, SEO, and data-driven strategies.",
  keywords: [
    "digital marketing",
    "SEO",
    "performance marketing",
    "Google Ads",
    "Meta Ads",
    "eCommerce marketing",
    "Smaran Basnet",
    "Nepal",
  ],
  authors: [{ name: "Smaran Basnet" }],
  openGraph: {
    title: "Smaran Basnet | Digital Marketing Specialist",
    description:
      "Helping businesses grow through performance marketing, SEO, and data-driven strategies.",
    url: "https://smaranbasnet.com.np",
    siteName: "Smaran Basnet",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://smaranbasnet.com.np/#person",
                  name: "Smaran Basnet",
                  jobTitle: "Digital Marketing Specialist",
                  description:
                    "Digital Marketing Specialist & Business Growth Strategist helping automobile and eCommerce businesses grow through performance marketing, SEO, and data-driven strategies.",
                  url: "https://smaranbasnet.com.np/",
                  image: "https://smaranbasnet.com.np/images/image.png",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kathmandu",
                    addressCountry: "Nepal",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://smaranbasnet.com.np/#website",
                  url: "https://smaranbasnet.com.np/",
                  name: "Smaran Basnet | Digital Marketing Specialist",
                  publisher: {
                    "@id": "https://smaranbasnet.com.np/#person",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
