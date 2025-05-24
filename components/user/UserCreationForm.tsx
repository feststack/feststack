'use client'

import { useState, useEffect } from 'react'

type Language = {
  languageId: number
  languageName: string
}

export default function UserCreationForm() {
  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userCode: '',
    email: '',
    password: '',
    languageId: '', // string pour le select
  })

  const [languages, setLanguages] = useState<Language[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const res = await fetch('/api/language')
        if (res.ok) {
          const data = await res.json()
          setLanguages(data)
          if (data.length > 0) setFormData(f => ({ ...f, languageId: data[0].languageId.toString() }))
        } else {
          console.error('Erreur chargement langues')
        }
      } catch (e) {
        console.error('Erreur fetch langues', e)
      }
    }
    fetchLanguages()
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage('')

    try {
      const bodyToSend = {
        ...formData,
        languageId: Number(formData.languageId),
      }

      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyToSend),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage(`✅ Utilisateur créé avec l'ID: ${data.userId}`)
        setFormData({ userFirstName: '', userLastName: '', userCode: '', email: '', password: '', languageId: '' })
      } else {
        setMessage(`❌ Erreur: ${data.message}`)
      }
    } catch (error) {
      setMessage('❌ Erreur lors de la requête')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen relative px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Créer un utilisateur</h1>

        {message && (
          <p className={`mb-4 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <input
          type="text"
          name="userFirstName"
          placeholder="Prénom"
          value={formData.userFirstName}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="userLastName"
          placeholder="Nom"
          value={formData.userLastName}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="userCode"
          placeholder="Code utilisateur"
          value={formData.userCode}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="languageId"
          value={formData.languageId}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {languages.map(lang => (
            <option key={lang.languageId} value={lang.languageId}>
              {lang.languageName}
            </option>
          ))}
        </select>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Créer l'utilisateur
        </button>
      </form>
    </div>
  )
}
