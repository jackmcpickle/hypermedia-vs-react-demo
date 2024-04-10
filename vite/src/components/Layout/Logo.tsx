import { Link } from '@tanstack/react-router';

interface LogoProps {}

export function Logo({}: LogoProps) {
    return (
        <Link
            to='/'
            className='flex'
        >
            <span className='text-green-800 font-bold'>Mc-Fruit</span>
        </Link>
    );
}
