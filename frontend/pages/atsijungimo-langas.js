import Link from 'next/link'

export default function AtsijungimoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Atsijungimo langas</h1>
      <p>Ar tikrai norite atsijungti?</p>
      
      <button style={{ padding: '10px 20px', marginTop: 10, cursor: 'pointer' }}>
        Atsijungti
      </button>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
