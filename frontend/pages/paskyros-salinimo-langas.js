import Link from 'next/link'

export default function PaskyrosSalinimoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Paskyros šalinimo langas</h1>
      <p>Ar tikrai norite ištrinti paskyrą?</p>
      
      <button style={{ padding: '10px 20px', marginTop: 10, cursor: 'pointer', backgroundColor: '#e74c3c', color: '#fff', border: 'none' }}>
        Ištrinti paskyrą
      </button>
      
      <p style={{ marginTop: 30 }}><Link href="/paskyros-langas">← Atgal į Paskyros langą</Link></p>
    </main>
  )
}
