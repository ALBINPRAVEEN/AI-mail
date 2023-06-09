import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import GenerateMail from "@/components/GenerateMail/GenerateMail";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Mail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main className="p-5 flex flex-col items-center gap-4">
        <div className="w-full">
          <Header />
        </div>
        <GenerateMail />
        <Footer />
      </main>
    </>
  );
}
