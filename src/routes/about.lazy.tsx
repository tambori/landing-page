import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about' as never)({
  component: About,
})

function About() {
  return <div className="p-2 font-bold text-lg">Hello from About!</div>
}
