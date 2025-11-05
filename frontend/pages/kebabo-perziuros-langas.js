import Link from 'next/link'

export default function KebaboPerziurosLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Kebabo peržiūros langas</h1>
      <p>Kebabo informacijos peržiūra</p>
      
      <p style={{ marginTop: 30 }}><Link href="/kebabu-saraso-langas">← Atgal į Kebabų sąrašo langą</Link></p>
    </main>
  )
}
