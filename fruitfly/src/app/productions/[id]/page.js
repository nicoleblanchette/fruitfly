import { productionData } from "../productionData";
import Image from "next/image";
import { garamond, napalm } from "../../layout";

const ProductionGallery = ({ production }) => {
	return (
		<ul className='columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8'>
			{production.gallery.map((image, i) => {
				return (
					<li className='my-8' key={i}>
						<Image src={image.src} alt={image.alt} />
					</li>
				);
			})}
		</ul>
	);
};

export default async function Production({ params }) {
	const { id } = await params;
	const production = productionData.find(data => data.id === id);
	return (
    <div className={`flex flex-col items-center`}>
      <h1 className={`text-6xl my-12 ${garamond.className}`}>{production.title}</h1>
			<ProductionGallery production={production} />
		</div>
	);
}
