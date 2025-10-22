import Image from "next/image";
import Logo from "../globalMedia/logo.png"

export const Navbar = () => {
	return (
		<div className='navbar bg-base-100 shadow-sm flex justify-between '>
      <div className='flex'>
        <Image width={36} src={Logo}/>
				<a className='btn btn-ghost text-2xl'>Fruit Fly Theatre Co</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<a className='text-2xl'>Shows</a>
					</li>
					<li>
						<a className='text-2xl'>Donate</a>
					</li>
					<li>
						<a className='text-2xl'>Instagram</a>
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