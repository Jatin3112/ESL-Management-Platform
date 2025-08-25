const API_BASE_URL = 'http://localhost:8000'

export interface Gateway {
  id: string
  storeName: string
  storeId: string
  ipAddress: string
  firmwareVersion: string
  lastHeartbeat: string
  status: string
  syncCount: number
  errorCount: number
  uptime: string
}

export interface GatewayCreate {
  storeName: string
  storeId: string
  ipAddress: string
  firmwareVersion: string
  lastHeartbeat: string
  status: string
  syncCount: number
  errorCount: number
  uptime: string
}

export interface GatewayUpdate {
  storeName?: string
  storeId?: string
  ipAddress?: string
  firmwareVersion?: string
  lastHeartbeat?: string
  status?: string
  syncCount?: number
  errorCount?: number
  uptime?: string
}

class GatewaysApi {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}/gateways${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      console.log('Making Gateway request to:', url)
      const response = await fetch(url, config)
      console.log('Gateway Response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Gateway Response error:', errorData)
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Gateway Response data:', data)
      return data
    } catch (error) {
      console.error('Gateway API request failed:', error)
      console.error('Gateway Request URL:', url)
      console.error('Gateway Request config:', config)
      throw error
    }
  }

  async getGateways(): Promise<Gateway[]> {
    return this.request<Gateway[]>('/')
  }

  async getGateway(id: string): Promise<Gateway> {
    return this.request<Gateway>(`/${id}`)
  }

  async createGateway(gateway: GatewayCreate): Promise<Gateway> {
    return this.request<Gateway>('/', {
      method: 'POST',
      body: JSON.stringify(gateway),
    })
  }

  async updateGateway(id: string, gateway: GatewayUpdate): Promise<Gateway> {
    return this.request<Gateway>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(gateway),
    })
  }

  async deleteGateway(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/${id}`, {
      method: 'DELETE',
    })
  }
}

export const gatewaysApi = new GatewaysApi() 