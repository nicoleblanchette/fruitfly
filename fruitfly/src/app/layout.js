import { Geist, Geist_Mono, EB_Garamond as Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "./globalComponents/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const garamond = Garamond({
	variable: "--font-garamond",
	subsets: ["latin"],
});

export const metadata = {
	title: "Fruit Fly Theatre Co.",
  description: "Rooted in punk ideals, we aim to uplift unheard voices through community driven storytelling.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${garamond.variable} antialiased`}
      >
        <Navbar />
				{children}
			</body>
		</html>
	);
}
