import Link from 'next/link'

export default function KebabuSarasoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Kebabų sąrašo langas</h1>
      
      <h2>Navigacija</h2>
      <ul>
        <li><Link href="/kebabo-valdymo-langas">Kebabo valdymo langas</Link></li>
        <li><Link href="/kebabo-perziuros-langas">Kebabo peržiūros langas</Link></li>
      </ul>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
