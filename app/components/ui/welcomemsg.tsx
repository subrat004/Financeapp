'use client';
import React from 'react';
import { useUser } from '@clerk/nextjs';

const WelcomeMsg = () => {
	const { user, isLoaded } = useUser();
	return (
		<div className="space-y-2 mb-4">
			<h2 className="text-2xl lg:text-4xl text-white font-bold ">
				Welcome Back{isLoaded ? ', ' : '  '}
				{user?.firstName}
			</h2>
			<p className="text-sm lg:text-base text-blue-300 ">Report On Finances</p>
		</div>
	);
};

export default WelcomeMsg;
