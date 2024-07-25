import { Layout } from '@/components/craft';
import { ThemeProvider } from '@/components/theme-provider';
import { createRootRoute, Outlet } from '@tanstack/react-router'
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
    <ThemeProvider defaultTheme='dark' storageKey='tambori-ui-theme'>
      <Layout className='lg:px-8 sm:px-6 min-h-screen'>
        <Outlet />
        <TanStackRouterDevtools />
      </Layout>
    </ThemeProvider>
  ),
});
