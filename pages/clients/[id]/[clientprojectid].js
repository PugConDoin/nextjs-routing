import { useRouter } from 'next/router'

function SelectedClientProjectPage() {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <h1>Project X for Client X</h1>
    </div>
  )
}

export default SelectedClientProjectPage