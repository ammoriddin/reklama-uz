import Head from "next/head";
import "./globals.css";
import Navbar from "@/containers/navbar/inde";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Reklama Uz</title>
      </Head>
      <body>
        <ToastContainer />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
