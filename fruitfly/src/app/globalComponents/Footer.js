import Logo from "../globalMedia/logo-transparent.png";
import Image from "next/image";
import { BsInstagram, BsEnvelope } from "react-icons/bs";
import { garamond } from "../layout";
export default function Footer() {
	return (
		<footer
			className={`${garamond.className} footer sm:footer-horizontal items-center p-4 text-2xl`}
		>
			<aside className='flex items-center'>
				<Image src={Logo} alt=' ' className='max-h-16 max-w-16' />
				<p className='italic'>Fruit Fly Theatre Company</p>
			</aside>
			<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
				<div className='flex items-center gap-4 mx-4'>
					<a
						href='https://www.instagram.com/fruitflytheatreco/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsInstagram size={24} />
					</a>
					<a
						href='mailto:fruitflytheatreco@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsEnvelope size={28} />
					</a>
				</div>
			</nav>
		</footer>
	);
}
