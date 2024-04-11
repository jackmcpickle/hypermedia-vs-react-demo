import { FormEvent, useEffect, useState } from 'react';
import { Button } from './Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductInfo, addToCart } from '@/api/db';

interface AddToCartFormProps {
    productId: number;
}

const ADD_TO_CART_LABEL = 'Add to Cart';

export function AddToCartForm({ productId }: AddToCartFormProps) {
    const [quantity, setQuantity] = useState(1);
    const queryClient = useQueryClient();
    const [btnLabel, setBtnLabel] = useState(ADD_TO_CART_LABEL);

    const { error, mutate, isSuccess, isPending } = useMutation({
        mutationFn: addToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });

    useEffect(() => {
        if (isSuccess) {
            setQuantity(1);
            setBtnLabel('Success');
            setTimeout(() => setBtnLabel(ADD_TO_CART_LABEL), 1500);
        }
        if (error) {
            console.log(error);
        }
    }, [error, isSuccess]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }
        const formData = new FormData(form) as ProductInfo;
        mutate(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex'>
                <input
                    type='hidden'
                    value={productId}
                    name='productId'
                />
                <input
                    type='number'
                    name='quantity'
                    id='quantity'
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    value={quantity}
                    step='1'
                    min='1'
                    className='rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                />
                <Button
                    label={btnLabel}
                    loading={isPending}
                />
            </div>
        </form>
    );
}
