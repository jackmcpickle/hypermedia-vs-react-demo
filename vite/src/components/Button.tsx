import clsx from 'clsx';
import { SpinnerIcon } from './SpinnerIcon';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
    label: string;
}

export function Button({ label }: ButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type='submit'
            className='flex max-w-xs flex-1 items-center justify-center rounded-r-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
        >
            <span className={clsx({ hidden: pending })}>{label}</span>
            <SpinnerIcon className={clsx({ hidden: !pending }, 'h-6 w-6')} />
        </button>
    );
}
