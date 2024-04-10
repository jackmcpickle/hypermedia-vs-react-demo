import Link from 'next/link';

interface LogoProps {}

export function Logo({}: LogoProps) {
    return (
        <Link
            href='/'
            className='flex'
        >
            <span className='text-green-800 font-bold'>Mc-Fruit</span>
        </Link>
    );
}
