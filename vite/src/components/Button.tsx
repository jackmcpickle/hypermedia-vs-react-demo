import clsx from 'clsx';
import { SpinnerIcon } from './SpinnerIcon';

interface ButtonProps {
    label: string;
    loading?: boolean;
}

export function Button({ label, loading }: ButtonProps) {
    return (
        <button
            disabled={loading}
            type='submit'
            className='flex max-w-xs flex-1 items-center justify-center rounded-r-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
        >
            <span className={clsx({ hidden: loading })}>{label}</span>
            <SpinnerIcon className={clsx({ hidden: !loading }, 'h-6 w-6')} />
        </button>
    );
}
