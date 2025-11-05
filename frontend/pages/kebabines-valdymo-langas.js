import Link from 'next/link'

export default function KebabinesValdymoLangas() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Kebabinės valdymo langas</h1>
      <p>Admin valdymo skydas</p>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
