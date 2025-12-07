import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function PaskyrosSalinimoLangas() {
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState([])
  const [message, setMessage] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleDelete = async () => {
    setErrors([])
    setMessage(null)

    try {
      const res = await fetch("/api/users/delete", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form)
})

      const data = await res.json()

      if (!res.ok) {
        setErrors(data.errors || ["Nepavyko ištrinti paskyros."])
        return
      }

      // SUCCESS — paaiškinta PDF seku diagramoj
      setMessage("Paskyra sėkmingai ištrinta.")

      // Išvalom sesiją
      localStorage.removeItem("user")

      // Po trumpo laiko grąžinam į pagrindinį
      setTimeout(() => {
        router.push("/")
      }, 1500)

    } catch (e) {
      console.error(e)
      setErrors(["Serverio klaida."])
    }
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Paskyros šalinimo langas</h1>
      <p>Įveskite savo duomenis patvirtinimui</p>

      {errors.length > 0 && (
        <div style={{ background: '#7f1d1d', padding: 10, borderRadius: 8, color: '#fff' }}>
          <ul>{errors.map((e,i)=><li key={i}>{e}</li>)}</ul>
        </div>
      )}

      {message && (
        <div style={{ background: '#14532d', padding: 10, borderRadius: 8, color: '#fff' }}>
          {message}
        </div>
      )}

      <div style={{ maxWidth: 400, marginTop: 20 }}>
        <label>El. paštas</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
        />

        <label>Slaptažodis</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
        />

        <button 
          onClick={handleDelete}
          style={{ 
            padding: '10px 20px', 
            marginTop: 10, 
            cursor: 'pointer',
            backgroundColor: '#e74c3c', 
            color: '#fff', 
            border: 'none',
            borderRadius: 6 
          }}>
          Ištrinti paskyrą
        </button>
      </div>

      <p style={{ marginTop: 30 }}>
        <Link href="/paskyros-langas">← Atgal į Paskyros langą</Link>
      </p>
    </main>
  )
}
