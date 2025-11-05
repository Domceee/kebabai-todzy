import Link from 'next/link'

export default function RegistracijosLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Registracijos langas</h1>
      <p>Sukurkite naują paskyrą</p>
      
      <p style={{ marginTop: 30 }}><Link href="/prisijungimo-langas">← Atgal į Prisijungimo langą</Link></p>
    </main>
  )
}
