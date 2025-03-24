import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import App  from '../App'
import { CashierPage } from '../pages/cashier'
import { Home } from '../components/Home'

// Root Route
const rootRoute = createRootRoute({
  component: App,
})

// Home Route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: Home,
})

// Home Route
const cashierRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CashierPage,
})

// Create the route tree
const routeTree = rootRoute.addChildren([homeRoute, cashierRoute])

// Create the router
export const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 