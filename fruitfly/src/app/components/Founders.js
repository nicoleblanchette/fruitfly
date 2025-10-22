import Image from "next/image";
import Valentina from "../media/valentina.jpg";
import Naomi from "../media/naomi.jpg";
import Valentine from "../media/valentine.jpg";

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
		bio: `Naomi Orange is an actor, singer, dancer and emerging producer/director based in \
    New York City. A graduate of the Stella Adler Conservatory, she was born in London and
    raised in New Zealand before spending her adolescence in Australia. There, she attended
    the National School of Dance and graduated top of her class from the selective Hunter School
    of the Performing Arts. Her credits include The Wolves (2), Carrie (Miss Gardner), Matilda (Miss Trunchbull)
    and Cahoot’s Macbeth (Macbeth). She has also appeared in several short films and modeling projects. Influenced \
    by punk and rave culture, Naomi has developed a bold, personal style that informs both her performance and presence.`,
	},
	{
		name: "Valentine Marie",
		imgSrc: Valentine,
		imgAlt: "",
		bio: `Valentine is a Mexican multi-hyphenate artist born in San Diego and based in NYC. 
With roots in devising and classical styles they are excited to continue finding creative ways to explore storytelling with hopes to continue engaging in projects that connects with their latino culture. 
Recent graduate of the Stella Adler Studio of Acting, Valentine also models at the International Center of Photography and appears in short films as well as music videos. 
Selected credits include Lucha (LA LUCHA), Helena (A Midsummer Night’s Dream), Shylock (The Merchant of Venice), #13 (The Wolves) and Sue Snell (Carrie). 
They are always dreaming of going back home to hug all the trees in Sequoia & surf the Golden Coast.`,
	},
];

const FoundersCard = ({ founder }) => {
	return (
		<li className='card bg-base-100 w-96 shadow-sm m-6'>
			<figure>
				<Image src={founder.imgSrc} alt={founder.imgAlt} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{founder.name}</h2>
				<p>{founder.bio}</p>
			</div>
		</li>
	);
};

export const Founders = () => {
	return (
		<div>
			<h2>Founders</h2>
			<ul className="flex">
				{foundersData.map(founder => (
					<FoundersCard key={founder.name} founder={founder} />
				))}
			</ul>
		</div>
	);
};
