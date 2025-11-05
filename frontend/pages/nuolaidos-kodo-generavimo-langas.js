import Link from 'next/link'

export default function NuolaidosKodoGeneravimoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Nuolaidos kodo generavimo langas</h1>
      <p>Generuokite nuolaidos kodą</p>
      
      <p style={{ marginTop: 30 }}><Link href="/paskyros-langas">← Atgal į Paskyros langą</Link></p>
    </main>
  )
}
