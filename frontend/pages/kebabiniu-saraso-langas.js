import Link from 'next/link'

export default function KebabiniuSarasoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Kebabinių sąrašo langas</h1>
      
      <h2>Navigacija</h2>
      <ul>
        <li><Link href="/kebabines-informacijos-langas">Kebabinės informacijos langas</Link></li>
      </ul>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
