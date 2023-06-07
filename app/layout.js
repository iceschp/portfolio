import "./globals.css"
import NavBar from "./navbar"
import Head from "next/head"

export const metadata = {
  title: "Warunya Sangchompoo",
  description: "Warunya Sangchompoo Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" type="image/png" href="icon.png" sizes="76x76"/>
    </Head>
      <body>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
