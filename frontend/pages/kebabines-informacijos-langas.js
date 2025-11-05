import Link from 'next/link'

export default function KebabinesInformacijosLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Kebabinės informacijos langas</h1>
      <p>Detali kebabinės informacija</p>
      
      <p style={{ marginTop: 30 }}>
        <Link href="/artimiausios-kebabines-langas">← Atgal į Artimiausios kebabinės langą</Link>
        {' | '}
        <Link href="/kebabiniu-saraso-langas">← Atgal į Kebabinių sąrašo langą</Link>
      </p>
    </main>
  )
}
