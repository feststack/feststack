'use client'

import { useState } from 'react'

export default function CreateUserPage() {
  const [formData, setFormData] = useState({
    userName: '',
    userSurname: '',
    userCode: '',
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage('')

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage(`Utilisateur créé avec l'ID: ${data.userId}`)
        setFormData({ userName: '', userSurname: '', userCode: '', email: '', password: '' })
      } else {
        setMessage(`Erreur: ${data.message}`)
      }
    } catch (error) {
      setMessage('Erreur lors de la requête')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h1>Créer un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Nom"
          value={formData.userName}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '8px', width: '100%' }}
        />
        <input
          type="text"
          name="userSurname"
          placeholder="Prénom"
          value={formData.userSurname}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '8px', width: '100%' }}
        />
        <input
          type="text"
          name="userCode"
          placeholder="Code utilisateur"
          value={formData.userCode}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '8px', width: '100%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '8px', width: '100%' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '8px', width: '100%' }}
        />
        <button type="submit" style={{ width: '100%', padding: '8px' }}>Créer l'utilisateur</button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  )
}
