import Link from 'next/link'

export default function KrepselioLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Krepšelio langas</h1>
      
      <h2>Navigacija</h2>
      <ul>
        <li><Link href="/uzsakymo-langas">Užsakymo langas</Link></li>
      </ul>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
