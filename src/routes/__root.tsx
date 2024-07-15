import { Layout } from '@/components/craft';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react';
const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // for Embedded mode
        // default: res.TanStackRouterDevPanel
      }))
    )

export const Route = createRootRoute({
  component: () => (
    <Layout className='lg:px-8 sm:px-6 dark:bg-slate-800 bg-slate-200 min-h-screen'>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  ),
});
