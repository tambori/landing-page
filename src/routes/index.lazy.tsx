import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

function Index() {
  return (
    <div className="p-4">
      <h3 className='font-bold font-sans text-xl text-red-500'>Welcome Home!</h3>
    </div>
  )
}
