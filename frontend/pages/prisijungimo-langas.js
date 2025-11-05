import Link from 'next/link'

export default function PrisijungimoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Prisijungimo langas</h1>
      
      <h2>Navigacija</h2>
      <ul>
        <li><Link href="/registracijos-langas">Registracijos langas</Link></li>
      </ul>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
