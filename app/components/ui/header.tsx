import React from 'react';
import HeaderLogo from './header_logo';
import Navigation from './navigation';
import { Loader2 } from 'lucide-react';
import WelcomeMsg from './welcomemsg';
import { UserButton, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

const Header = () => {
	return (
		<header
			className="bg-gradient-to-b  from-blue-500 to-blue-700 
            px-4 py-8 lg:px-14 pb-36
        "
		>
			<div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex items-center justify-between mb-14">
					<div className="flex items-center lg:gap-x-16">
						<HeaderLogo></HeaderLogo>
						<Navigation />
					</div>
					<ClerkLoaded>
						<UserButton afterSwitchSessionUrl="/"></UserButton>
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="size-8 animate-spin text-slate-300"></Loader2>
					</ClerkLoading>
				</div>
				<WelcomeMsg />
			</div>
		</header>
	);
};

export default Header;
