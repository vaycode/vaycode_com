import React, { SyntheticEvent } from 'react';

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import SelectCountry from '../select-country/select-country';

const navigation = [
	{ name: 'Presentation', href: '#', current: true },
	{ name: 'Team', href: '#team', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Contact', href: '#', current: false },
]

var classNames = require('classnames');

export default function Example2() {
	return (
		<Disclosure as="nav" className="bg-[#02393e] fixed w-full">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#045b62] focus:border-collapse">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-center sm:justify-between">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block lg:hidden h-6 w-auto"
										src={require("../../assets/images/logo.png")}
										alt="Workflow"
									/>
									<img
										className="hidden lg:block h-6 w-auto"
										src={require("../../assets/images/logo.png")}
										alt="Workflow"
									/>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current ? 'bg-[#045b62] text-white' : 'text-gray-300 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
										<SelectCountry/>
										
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? 'bg-[#045b62] text-white' : 'text-gray-300 hover:bg-[#045b62] hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
