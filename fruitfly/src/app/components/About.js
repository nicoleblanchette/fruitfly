import { specialElite, napalm, inter, garamond, madurai } from "../layout";
import Image from "next/image";
import Hero from "../media/hero.jpg"

export const About = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className={`text-6xl ${garamond.className} my-8`}>
				Fruit Fly Theatre Company
      </h1>
      <Image src={Hero} alt=" " className="max-w-7xl"/>
			<p
				className={`flex justify-center items-center text-center text-xl mx-12 my-12 ${madurai.className}`}
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
