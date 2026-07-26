import Image from "next/image";
import Logo from "../globalMedia/logo-transparent.png";
import Link from "next/link";
import { Noto_Sans_Psalter_Pahlavi, Special_Elite } from "next/font/google";
import { specialElite, napalm, garamond } from "../layout";

export const Navbar = () => {
	return (
		<div className={`drawer ${garamond.className}  `}>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				{/* Navbar */}
				<div className='navbar bg-base-300 w-full'>
					<div className='flex-none lg:hidden'>
						<label
							htmlFor='my-drawer-2'
							aria-label='open sidebar'
							className='btn btn-square btn-ghost'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block h-6 w-6 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</label>
					</div>

					<div className='mx-2 flex-1 px-2'>
						<div className='flex'>
							<Image width={36} src={Logo} alt='' />
							<Link
								className='btn btn-ghost text-2xl  text-yellow-50 font-medium italic'
								href={"/"}
							>
								Fruit Fly Theatre Company
							</Link>
						</div>
					</div>
					<div className='hidden flex-none lg:block'>
						<ul
							className={`menu menu-horizontal dropdown-content ${garamond.className}`}
						>
							<li>
								<Link className={`text-2xl`} href='/productions'>
									Productions
								</Link>
							</li>
							<li>
								<a
									className='text-2xl'
									href='https://www.gofundme.com/f/fruit-fly-theatre-co-the-wish'
									target='_blank'
									rel='noopener noreferrer'
								>
									Donate
								</a>
							</li>
							<li>
								<details className='text-2xl'>
									<summary>Contact</summary>
									<ul className='p-2 bg-base-100 w-40 z-1'>
										<li>
											<a
												href='https://www.instagram.com/fruitflytheatreco/'
												target='_blank'
												rel='noopener noreferrer'
											>
												Instagram
											</a>
										</li>
										<li>
											<a
												href='mailto:fruitflytheatreco@gmail.com'
												target='_blank'
												rel='noopener noreferrer'
											>
												Email
											</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='drawer-side'>
				<label
					htmlFor='my-drawer-2'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>
				<ul className='menu bg-base-200 min-h-full w-80 p-4'>
					{/* Sidebar content here */}
					<li>
						<Link className={`text-2xl`} href='/productions'>
							Productions
						</Link>
					</li>
					<li>
						<a
							className='text-2xl'
							href='https://www.gofundme.com/f/fruit-fly-theatre-co-the-wish'
							target='_blank'
							rel='noopener noreferrer'
						>
							Donate
						</a>
					</li>
					<li>
						<details className='text-2xl'>
							<summary>Contact</summary>
							<ul className='p-2 bg-base-100 w-40 z-1'>
								<li>
									<a
										href='https://www.instagram.com/fruitflytheatreco/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										href='mailto:fruitflytheatreco@gmail.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										Email
									</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
};

/*
consider this for mobile friendly usage:
<div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div > 
*/
