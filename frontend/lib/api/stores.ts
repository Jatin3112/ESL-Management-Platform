const API_BASE_URL = 'https://esl-management-platform.onrender.com'

export interface Store {
  id: string
  name: string
  location: string
  manager: string
  managerId: string
  eslCount: number
  status: string
  lastSync?: string
}

export interface StoreCreate {
  name: string
  location: string
  manager: string
  eslCount?: number
  status?: string
  lastSync?: string
}

export interface StoreUpdate {
  name?: string
  location?: string
  manager?: string
  eslCount?: number
  status?: string
  lastSync?: string
}

class StoresApi {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}/stores${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      console.log('Making Store request to:', url)
      const response = await fetch(url, config)
      console.log('Store Response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Store Response error:', errorData)
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Store Response data:', data)
      return data
    } catch (error) {
      console.error('Store API request failed:', error)
      console.error('Store Request URL:', url)
      console.error('Store Request config:', config)
      throw error
    }
  }

  async getStores(): Promise<Store[]> {
    return this.request<Store[]>('/')
  }

  async getStore(id: string): Promise<Store> {
    return this.request<Store>(`/${id}`)
  }

  async createStore(store: StoreCreate): Promise<Store> {
    return this.request<Store>('/', {
      method: 'POST',
      body: JSON.stringify(store),
    })
  }

  async updateStore(id: string, store: StoreUpdate): Promise<Store> {
    return this.request<Store>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(store),
    })
  }

  async deleteStore(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/${id}`, {
      method: 'DELETE',
    })
  }
}

export const storesApi = new StoresApi() 