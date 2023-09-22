import {
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router'

import { Root } from '../layouts/Root'

import { Index } from '../pages/Home'
import { About } from '../pages/About'

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
})

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})



// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// Create the router using your route tree
export const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}