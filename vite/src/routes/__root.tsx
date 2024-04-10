import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartContextProvider } from '@/context/cartContext';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '@/components/Layout/Header';

const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: () => (
        <QueryClientProvider client={queryClient}>
            <CartContextProvider>
                <Header />
                <div className='bg-gray-50 p-8'>
                    <Outlet />
                </div>
                <TanStackRouterDevtools />
            </CartContextProvider>
        </QueryClientProvider>
    ),
});
