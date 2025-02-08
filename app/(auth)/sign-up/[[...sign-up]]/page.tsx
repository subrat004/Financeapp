import { SignIn, ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				<div className="text-center space-y-4 pt-16">
					<h1 className="font-bold text-3xl text-black">Welcome Back </h1>
					<p className="text-base text-orange-600">Login or Create Account</p>
				</div>
				<div className="flex items-center justify-center  mt-8">
					<ClerkLoaded>
						<SignUp />
					</ClerkLoaded>

					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground"></Loader2>
					</ClerkLoading>
				</div>
			</div>
			<div className="h-full bg-blue-400 hidden lg:flex items-center justify-center">
				<Image
					src={'/google-pay-or-tez-logo-svgrepo-com.svg'}
					alt=""
					width="100"
					height={100}
				></Image>
			</div>
		</div>
	);
}
