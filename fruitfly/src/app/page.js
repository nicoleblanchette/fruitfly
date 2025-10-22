import Image from "next/image";
import { About } from "./components/About";
import { Founders } from "./components/Founders";
import { Latest } from "./components/Latest";

export default function Home() {
	return (
		<div className="m-6">
			<About />
			<Founders />
			<Latest />
		</div>
	);
}
