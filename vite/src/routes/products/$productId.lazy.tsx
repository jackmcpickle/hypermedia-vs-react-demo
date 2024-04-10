import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products/$productId')({
  component: () => <div>Hello /products/$productId!</div>
})