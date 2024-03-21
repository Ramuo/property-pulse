import Link from 'next/link';

export const metadata = {
    titre: "test"
}

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Montrer les offres</Link>
    </div>
  )
}

export default HomePage;