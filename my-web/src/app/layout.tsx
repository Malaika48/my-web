import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import type React from "react" // Added import for React

import Header from "./components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Developer Portfolio",
  description: "Showcase of AI projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header/>
        <main className="flex-grow">{children}</main>
        
      </body>
    </html>
  )
}

