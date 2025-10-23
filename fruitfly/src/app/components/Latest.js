import Image from "next/image";
import WishPoster from "../globalMedia/wishPoster.jpeg";
import Link from "next/link";

export const Latest = () => {
	return (
		<div>
			<div className='card lg:card-side bg-base-100 shadow-sm'>
				<figure>
					<Image src={WishPoster} alt='' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>The Wish</h2>
					<p>
						Join us for an evening of theatre with Fruit Fly Theatre's
						production! A collection of theatrical scenes that grapple with the
						impact of radical social change. Blending humorous personal
						narratives, movement, poetry, and... spells! The Wish explores the
						fragility of rights once believed to be permanent, and the power of
						live theatre as a force for transformation in times of crisis.
						Written by Justice Hehir, Dena Igusti, Phanésia Pharel, Nia Akilah
						Robinson, and Julia Specht. Dramaturgy by May Treuhaft-Ali and Fruit
						Fly Theatre co. Script created with the support of New Georges and
						made possible by a Clubbed Thumb Constitution Commission. Originally
						funded by Heidi Schreck and the producers of "What the Constitution
						Means to Me."
					</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'><Link href={"/shows"}>Learn More</Link></button>
						<button className='btn btn-primary'>
							<a href='https://www.tickettailor.com/events/fruitflytheatre/1912653'>
								Buy Tickets
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
