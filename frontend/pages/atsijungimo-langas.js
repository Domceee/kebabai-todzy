import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AtsijungimoLangas() {

  const router = useRouter()

  const handleLogout = () => {
    // 1. Ištrinti naudotojo sesiją
    localStorage.removeItem("user")

    // 2. Nukreipti į pagrindinį langą
    router.push("/")
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Atsijungimo langas</h1>
      <p>Ar tikrai norite atsijungti?</p>
      
      <button 
        onClick={handleLogout}
        style={{ padding: '10px 20px', marginTop: 10, cursor: 'pointer' }}>
        Atsijungti
      </button>
      
      <p style={{ marginTop: 30 }}><Link href="/">← Atgal į Pagrindinį langą</Link></p>
    </main>
  )
}
