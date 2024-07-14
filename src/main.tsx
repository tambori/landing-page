import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// import the generated route tree
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from "./routeTree.gen";

// create a new router instance
const router = createRouter({ routeTree });


// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router,
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
