import Link from 'next/link'

export default function UzsakymoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Užsakymo langas</h1>
      <p>Užsakymo informacija ir užbaigimas</p>
      
      <p style={{ marginTop: 30 }}>
        <Link href="/uzsakymu-perziuros-langas">← Atgal į Užsakymų peržiūros langą</Link>
        {' | '}
        <Link href="/krepselio-langas">← Atgal į Krepšelio langą</Link>
      </p>
    </main>
  )
}
