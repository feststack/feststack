'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const fetchConfigs = async () => {
  const res = await fetch('/api/config')
  if (!res.ok) {
    throw new Error('Error fetching configs')
  }
  return res.json()
}

const addConfig = async (configName: string, configValue: number) => {
  const res = await fetch('/api/config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ configName, configValue }),
  })
  if (!res.ok) {
    throw new Error('Error adding config')
  }
  return res.json()
}

export default function ConfigPage() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['configs'],
    queryFn: fetchConfigs,
  })

  const [configName, setConfigName] = useState('')
  const [configValue, setConfigValue] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addConfig(configName, configValue)
    refetch() // Rafraîchit les données après l'ajout
  }

  if (isLoading) return <div>Loading...</div>
  if (error instanceof Error) return <div>Error: {error.message}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Liste des Configurations</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Config Name"
          value={configName}
          onChange={(e) => setConfigName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Config Value"
          value={configValue}
          onChange={(e) => setConfigValue(Number(e.target.value))}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Config
        </button>
      </form>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Config Name</th>
            <th className="border border-gray-300 p-2">Config Value</th>
            <th className="border border-gray-300 p-2">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((config: { configId: number; configName: string; configValue: number; createdAt: string }) => (
            <tr key={config.configId}>
              <td className="border border-gray-300 p-2">{config.configId}</td>
              <td className="border border-gray-300 p-2">{config.configName}</td>
              <td className="border border-gray-300 p-2">{config.configValue}</td>
              <td className="border border-gray-300 p-2">
                {new Date(config.createdAt).toLocaleString()} {/* Affiche la date et l'heure */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
