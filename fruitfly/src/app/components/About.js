import { specialElite, napalm, inter } from "../layout";
import Image from "next/image";
import Hero from "../media/hero.jpeg"

export const About = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className={`text-6xl ${napalm.className}`}>
				Fruit Fly Theatre Company
      </h1>
      <Image src={Hero} alt=" "/>
			<p
				className={`flex justify-center items-center text-center text-xl mx-12 my-12 ${inter.className}`}
			>
				At Fruit Fly Theatre Company, our mission is to create collaborative
				projects that address modern struggles-both global and domestic-through
				new works and reimaginings of classical texts. Rooted in punk ideals, we
				aim to uplift unheard voices and inspire self expression through
				community driven storytelling. Explorative across different mediums, we
				seek to dismantle the status quo and build a better future through bold,
				inclusive and boundary pushing theatre.
			</p>
		</div>
	);
};
