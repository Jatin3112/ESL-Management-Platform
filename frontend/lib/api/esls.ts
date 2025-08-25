const API_BASE_URL = 'http://localhost:8000'

export interface ESL {
  id: string
  labelSize: string
  batteryLevel: number
  signalStrength: number
  status: string
  productName: string
  storeName: string
  lastSync?: string
  isRecentlySync?: boolean
}

export interface ESLCreate {
  labelSize: string
  batteryLevel: number
  signalStrength: number
  status: string
  productName: string
  storeName: string
  lastSync?: string
  isRecentlySync?: boolean
}

export interface ESLUpdate {
  labelSize?: string
  batteryLevel?: number
  signalStrength?: number
  status?: string
  productName?: string
  storeName?: string
  lastSync?: string
  isRecentlySync?: boolean
}

class ESLsApi {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}/esls${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      console.log('Making ESL request to:', url)
      const response = await fetch(url, config)
      console.log('ESL Response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('ESL Response error:', errorData)
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('ESL Response data:', data)
      return data
    } catch (error) {
      console.error('ESL API request failed:', error)
      console.error('ESL Request URL:', url)
      console.error('ESL Request config:', config)
      throw error
    }
  }

  async getESLs(): Promise<ESL[]> {
    return this.request<ESL[]>('/')
  }

  async getESL(id: string): Promise<ESL> {
    return this.request<ESL>(`/${id}`)
  }

  async createESL(esl: ESLCreate): Promise<ESL> {
    return this.request<ESL>('/', {
      method: 'POST',
      body: JSON.stringify(esl),
    })
  }

  async updateESL(id: string, esl: ESLUpdate): Promise<ESL> {
    return this.request<ESL>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(esl),
    })
  }

  async deleteESL(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/${id}`, {
      method: 'DELETE',
    })
  }
}

export const eslsApi = new ESLsApi() 