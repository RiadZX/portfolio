import "./global.css"
import type { Metadata } from "next"
import { Source_Serif_4, JetBrains_Mono } from "next/font/google"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Riad Zaid",
    template: "%s | Riad Zaid",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Riad's Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Riad's Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const cx = (...classes) => classes.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={cx(
        "dark text-[#e6f5ec] bg-[#07100b]",
        sourceSerif.variable,
        jetbrainsMono.variable
      )}
    >
      <head>
        <meta name="google-site-verification" content="0g_TewX8AERqWGD70qCUiMrtOp-7gMYdLIw33k3tOQE" />
      </head>
      <body className="antialiased max-w-3xl mx-6 mt-10 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
