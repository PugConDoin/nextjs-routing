import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1>Welcome to Nitecoda</h1>
      <ul>
        <li>
          <Link href='./portfolio'>Project Portfolio</Link>
        </li>
        <li>
          <Link href='./clients'>Happy Customers</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
