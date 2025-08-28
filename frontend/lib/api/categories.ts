const API_BASE_URL = 'https://esl-management-platform.onrender.com/'

export interface Category {
  id: string
  name: string
  description?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface CategoryCreate {
  name: string
  description?: string
  is_active?: boolean
}

export interface CategoryUpdate {
  name?: string
  description?: string
  is_active?: boolean
}

class CategoriesApi {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}/categories${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      console.log('Making request to:', url)
      const response = await fetch(url, config)
      console.log('Response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Response error:', errorData)
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Response data:', data)
      return data
    } catch (error) {
      console.error('API request failed:', error)
      console.error('Request URL:', url)
      console.error('Request config:', config)
      throw error
    }
  }

  async getCategories(activeOnly: boolean = false): Promise<Category[]> {
    const params = activeOnly ? '?active_only=true' : ''
    return this.request<Category[]>(`/${params}`)
  }

  async getCategory(id: string): Promise<Category> {
    return this.request<Category>(`/${id}`)
  }

  async createCategory(category: CategoryCreate): Promise<Category> {
    return this.request<Category>('/', {
      method: 'POST',
      body: JSON.stringify(category),
    })
  }

  async updateCategory(id: string, category: CategoryUpdate): Promise<Category> {
    return this.request<Category>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(category),
    })
  }

  async deleteCategory(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/${id}`, {
      method: 'DELETE',
    })
  }

  async initializeCategories(): Promise<{ message: string }> {
    return this.request<{ message: string }>('/initialize', {
      method: 'POST',
    })
  }
}

export const categoriesApi = new CategoriesApi() 