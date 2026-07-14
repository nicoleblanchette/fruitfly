import { castData } from "./castData";
import Image from "next/image";

const CastCard = ({ member }) => {
	return (
		<li className='card bg-base-100 w-96 shadow-sm m-6'>
			<figure>
				<Image src={member.imgSrc} alt={member.imgAlt} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					{member.name} | {member.role}
				</h2>
				<p>{member.bio}</p>
			</div>
		</li>
	);
};

export const Cast = () => {
	return (
		<div>
			<h2 className="text-4xl">Cast</h2>
			<ul className='flex flex-wrap justify-center'>
				{castData.map(member => (
					<CastCard key={member.name} member={member} />
				))}
			</ul>
		</div>
	);
};
