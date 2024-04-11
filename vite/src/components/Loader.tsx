import { SpinnerIcon } from './SpinnerIcon';
export function Loader() {
    return (
        <div className='h-56 flex justify-center items-center'>
            <SpinnerIcon className='w-6 h-6' />
        </div>
    );
}
