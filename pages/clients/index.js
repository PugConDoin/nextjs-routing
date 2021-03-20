import Link from 'next/link'

function ClientsPage() {
  const clients = [
    { id: 'olivesetal', name: 'Olives Et Al' },
    { id: 'spiritofestia', name: 'Spirit of Estia' },
    { id: 'icecreamboat', name: 'The Ice Cream Boat Company' },
    { id: 'greenside', name: 'Greenside Turfcare' },
  ]

  return (
    <div>
      <h1>Customers We've Already Helped</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
