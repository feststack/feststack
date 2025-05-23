'use client'

import { useState } from 'react'

export default function CreateUserPage() {
  const [formData, setFormData] = useState({
    artistName: '',
  })

  const [message, setMessage] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage('')

    try {
      const bodyToSend = { ...formData }

      const res = await fetch('/api/artist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage(`✅ Artist créé avec l'ID: ${data.artistId}`)
        setFormData({ artistName: '' })
      } else {
        setMessage(`❌ Erreur: ${data.message}`)
      }
    } catch (error) {
      setMessage('❌ Erreur lors de la requête')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Créer un artiste</h1>

        {message && (
          <p
            className={`mb-4 ${
              message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}

            <input
            type="text"
            name="artistName"
            placeholder="Nom de l'artiste"
            value={formData.artistName}
            onChange={handleChange}
            required
            className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />


        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Créer l'artiste
        </button>
      </form>
    </div>
  )
}
