import { config } from 'process'
import { getConfig, createConfig } from '../../../lib/api/config'

describe('Test API Functions', () => {
  it('should fetch configs from the database', async () => {
    const configs = await getConfig()
    expect(configs).toBeDefined()
    expect(Array.isArray(configs)).toBe(true)
  })

  it('should create a new config in the database', async () => {
    const configData = { configName: 'Test Name', configValue: 42 }
    const newConfig = await createConfig(configData)
    expect(newConfig).toHaveProperty('testName', configData.configName)
    expect(newConfig).toHaveProperty('testValue', configData.configValue)
  })
})
