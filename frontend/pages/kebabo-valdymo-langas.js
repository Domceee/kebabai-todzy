import Link from 'next/link'

export default function KeboboValdymoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Kebabo valdymo langas</h1>
      <p>Kebabo valdymo funkcijos</p>
      
      <p style={{ marginTop: 30 }}><Link href="/kebabu-saraso-langas">← Atgal į Kebabų sąrašo langą</Link></p>
    </main>
  )
}
