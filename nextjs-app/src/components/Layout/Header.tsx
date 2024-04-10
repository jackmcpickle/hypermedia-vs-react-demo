'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

import { NAVIGATION } from '@/constants';
import { CartStatus } from '@/components/CartStatus';
import { Logo } from '@/components/Layout/Logo';

interface HeaderProps {
    count: number;
}

export function Header({ count }: HeaderProps) {
    const [open, setOpen] = useState(false);
    function handleToggle() {
        setOpen((state) => !state);
    }

    return (
        <div>
            <div
                className='relative z-40 lg:hidden'
                role='dialog'
                aria-modal='true'
            >
                <Transition
                    as='div'
                    show={open}
                    className='fixed inset-0 bg-black bg-opacity-25'
                    enter='transition-opacity ease-linear duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity ease-linear duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                ></Transition>

                <Transition
                    show={open}
                    className='fixed inset-0 z-40 flex'
                    x-show='open'
                    onClick={handleToggle}
                    enter='transition ease-in-out duration-300 transform'
                    enterFrom='-translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition ease-in-out duration-300 transform'
                    leaveFrom='translate-x-0'
                    leaveTo='-translate-x-full'
                >
                    <div className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                        <div className='flex px-4 pb-2 pt-5'>
                            <button
                                type='button'
                                onClick={handleToggle}
                                className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                            >
                                <span className='sr-only'>Close menu</span>
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                            {NAVIGATION.map((nav) => (
                                <div
                                    className='flow-root'
                                    key={nav.link}
                                >
                                    <Link
                                        href={nav.link}
                                        className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                                    >
                                        {nav.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </Transition>
            </div>
            <header className='relative z-10 bg-white'>
                <nav
                    aria-label='Top'
                    className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
                >
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex flex-1 items-center lg:hidden'>
                                <button
                                    type='button'
                                    onClick={handleToggle}
                                    className='-ml-2 rounded-md bg-white p-2 text-gray-400'
                                >
                                    <span className='sr-only'>Open menu</span>
                                    <svg
                                        className='h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            <div className='hidden lg:block lg:flex-1 lg:self-stretch'>
                                <div className='flex h-full space-x-8'>
                                    {NAVIGATION.map((nav) => (
                                        <Link
                                            key={nav.link}
                                            href={nav.link}
                                            className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                                        >
                                            {nav.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Logo />
                            <div className='flex flex-1 items-center justify-end'>
                                <CartStatus count={count} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
