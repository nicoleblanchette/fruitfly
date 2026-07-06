import {
	Geist,
	Geist_Mono,
	EB_Garamond as Garamond,
	Special_Elite,
	Inter,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./globalComponents/Navbar";

const garamond = Garamond({
	variable: "--font-garamond",
	subsets: ["latin"],
});

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: "400",
});

export const napalm = localFont({
	src: "../../public/operation-napalm.italic.ttf",
	variable: "--font-napalm",
});

export const specialElite = Special_Elite({
	variable: "--font-special-elite",
	weight: "400",
	subsets: ["latin"],
});
export const metadata = {
	title: "Fruit Fly Theatre Co.",
	description:
		"Rooted in punk ideals, we aim to uplift unheard voices through community driven storytelling.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${garamond.variable} ${specialElite.variable} ${napalm.variable} ${inter.variable} antialiased  text-yellow-50`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
