import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderLogo = () => {
	return (
		<div>
			<Link href={'/'}>
				<div className="items-center hidden lg:flex">
					<Image
						src={'google-pay-or-tez-logo-svgrepo-com.svg'}
						height={30}
						width={30}
						alt=""
					></Image>
					<p className="font-semibold text-white text-2xl ml-2.5">Gpay</p>
				</div>
			</Link>
		</div>
	);
};

export default HeaderLogo;
