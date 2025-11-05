import Link from 'next/link'

export default function PaskyrosLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Paskyros langas</h1>
      
      <h2>Navigacija</h2>
      <ul>
        <li><Link href="/nuolaidos-kodo-generavimo-langas">Nuolaidos kodo generavimo langas</Link></li>
        <li><Link href="/paskyros-salinimo-langas">Paskyros šalinimo langas</Link></li>
        <li><Link href="/slaptazodzio-keitimo-langas">Slaptažodžio keitimo langas</Link></li>
      </ul>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
