import { useRouter } from 'next/router'

function ClientProjectsPage() {
  const router = useRouter()
  console.log(router.query)

  function loadProjectHandler() {
    // load specific client project
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'olivesetal', clientprojectid: 'projecta' },
    })
  }

  return (
    <div>
      <h1>Projects Completed for Client X</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage
