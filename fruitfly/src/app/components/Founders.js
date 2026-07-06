import Image from "next/image";
import Valentina from "../media/valentina.jpg";
import Naomi from "../media/naomi.jpg";
import Valentine from "../media/valentine.jpg";
import { napalm, inter } from "../layout";

const foundersData = [
	{
		name: "Valentina Avila",
		imgSrc: Valentina,
		imgAlt: "",
		bio: `Valentina Avila is a Venezuelan actress. A recent graduate of Stella Adler Studio 
    of Acting who also got her BFA from Central Michigan University on theatre. Some of her career
    highlights have been performing in The Baby Shower (Sophie), Hamlet (Ophelia), and in The Wolves (#11).
     She has directed shows like Lighting Martha, The Baltimore Waltz, as well as assisted Directed a production
     of The Revolutionists. She is excited to have her directing debut here in New York amongst the wonderful cast and crew of The Wish!`,
	},
	{
		name: "Naomi Orange",
		imgSrc: Naomi,
		imgAlt: "",
		bio: `Naomi Orange is an actor, singer, dancer and director based in New York City. A graduate of the Stella Adler Conservatory, she was born in London, raised in New Zealand and spent her adolescence in Australia, where she trained at the National College of Dance. before relocating to the US. Her theatre credits include Shiva and Wayne’s Gun with the New York Theatre Festival, The Wish (Claire), The Wolves (#2), Carrie (Miss Gardner), Matilda (Miss Trunchbull), and Cahoot’s Macbeth (Macbeth). She has also appeared in several short films and modeling campaigns. Influenced by punk and rave culture, Naomi has developed a bold, personal style that informs both her performance and presence.`,
	},
	{
		name: "Valentine Alvarado",
		imgSrc: Valentine,
		imgAlt: "",
		bio: `Valentine is a Mexican multi-hyphenate artist born in San Diego and based in NYC. 
 In 2023 they performed with the La Jolla Playhouse’s WOW Festival in Teatro Óptica’s immersive project La Lucha.
Valentine began devising projects under the guide of Jenn Banda in 2018 with an emphasis on political issues such as the prison industrial complex. They’ve directed projects such as Reckless by Craig Lucas and various movement pieces. Alternatively Valentine can be found watching Rod Serling’s Twilight Zone. (They are also always scheming ways to land Guillermo Del Toro or Mike Flannegan’s next project)`,
	},
];

const FoundersCard = ({ founder }) => {
	return (
		<li className='card bg-base-100 w-96 shadow-sm m-6'>
			<figure className='h-6/12'>
				<Image src={founder.imgSrc} alt={founder.imgAlt} />
			</figure>
			<div className='card-body flex flex-col justify-center items-center'>
				<h3 className={`${napalm.className} text-4xl card-title`}>
					{founder.name}
				</h3>
				<p className='text-center'>{founder.bio}</p>
			</div>
		</li>
	);
};

export const Founders = () => {
	return (
		<div className='flex justify-center flex-col items-center'>
			<h2 className={`text-4xl ${napalm.className}`}>Founders</h2>
			<ul className={`flex justify-center flex-wrap ${inter.className}`}>
				{foundersData.map(founder => (
					<FoundersCard key={founder.name} founder={founder} />
				))}
			</ul>
		</div>
	);
};
