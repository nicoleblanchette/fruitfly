import { About } from "./components/About";
import { Founders } from "./components/Founders";

export default function Home() {
	return (
		<div className='m-6 align-middle flex justify-center flex-col'>
			<About />
      <Founders />
		</div>
	);
}
