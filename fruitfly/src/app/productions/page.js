import { ShowDetails } from "./components/ShowDetails";
import { garamond, inter, napalm } from "../layout";
import Image from "next/image";
import Link from "next/link";

import { productionData } from "./productionData";

const ProductionCard = ({ production }) => {
	return (
		<li className='card bg-base-100 w-96 shadow-sm m-6'>
			<figure className='h-6/12'>
				<Image src={production.coverSrc} alt={production.coverAlt} />
			</figure>

			<div className='card-body inline px-0'>
				<div className='divider divider-neutral'></div>
				<h3 className={`${garamond.className} text-4xl card-title font-bold`}>
					{production.title}
				</h3>
				<button className='btn btn-link px-0 text-2xl italic font-light'>
					<Link href={`/productions/${production.id}`}>View Gallery</Link>
				</button>
				{/* <div className="card-actions justify-start">
        <button className="btn btn-outline"><Link href={`/productions/${production.id}`}>Gallery</Link></button></div> */}
			</div>
		</li>
	);
};

export default function Productions() {
	return (
		<div className='flex justify-center flex-col items-center'>
			<h1 className={`text-6xl m-12 ${garamond.className}`}>Productions</h1>
			<ul className={`flex justify-center flex-wrap ${garamond.className}`}>
				{productionData
					.filter(data => data.past)
					.map(production => (
						<ProductionCard key={production.id} production={production} />
					))}
			</ul>
		</div>
	);
}
