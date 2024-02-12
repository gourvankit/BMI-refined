import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="heading">
          <div>
            <h1>BMI Calculator</h1>
            <p>Use this calculator to check your body mass index (BMI).</p>
          </div>
          <div>
            <Image
              src="/assets/logo.svg"
              width={114.63}
              height={108.25}
            ></Image>
          </div>
        </div>
        <div className="child">
          <div className="child">{children}</div>
        </div>
      </body>
    </html>
  );
}