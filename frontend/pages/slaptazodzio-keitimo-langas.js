import Link from 'next/link'

export default function SlaptazodzioKeitimoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Slaptažodžio keitimo langas</h1>
      <p>Pakeiskite savo slaptažodį</p>
      
      <p style={{ marginTop: 30 }}><Link href="/paskyros-langas">← Atgal į Paskyros langą</Link></p>
    </main>
  )
}
