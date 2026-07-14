import { ShowDetails } from "./components/ShowDetails";
import { inter, napalm } from "../layout";
import Image from "next/image";
import Link from "next/link";

import { productionData } from "./productionData";


const ProductionCard = ({ production }) => {
	return (
		<li className='card bg-base-100 w-96 shadow-sm m-6'>
			<figure className='h-6/12'>
				<Image src={production.coverSrc} alt={production.coverAlt} />
			</figure>
			<div className='card-body flex flex-col justify-center items-center'>
				<h3 className={`${napalm.className} text-4xl card-title`}>
					{production.title}
        </h3>
        <button><Link href={`/productions/${production.id}`}>Gallery</Link></button>
			</div>
		</li>
	);
};

export default function Productions() {
	return (
		<div className='flex justify-center flex-col items-center'>
			<h2 className={`text-4xl ${napalm.className}`}>Productions</h2>
			<ul className={`flex justify-center flex-wrap ${inter.className}`}>
				{productionData.filter((data) => data.past).map(production => (
          <ProductionCard key={production.id} production={production} />
				))}
			</ul>
		</div>
	);
}
