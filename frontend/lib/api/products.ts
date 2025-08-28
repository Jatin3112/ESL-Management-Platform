const API_BASE_URL = 'https://esl-management-platform.onrender.com'

export interface Product {
  id: string
  name: string
  barcode: string
  mrp: number
  discount?: number
  sellingPrice: number
  category: string
}

export interface ProductCreate {
  name: string
  barcode: string
  mrp: number
  discount?: number
  sellingPrice: number
  category: string
}

export interface ProductUpdate {
  name?: string
  barcode?: string
  mrp?: number
  discount?: number
  sellingPrice?: number
  category?: string
}

class ProductsApi {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}/products${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      console.log('Making Product request to:', url)
      const response = await fetch(url, config)
      console.log('Product Response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Product Response error:', errorData)
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Product Response data:', data)
      return data
    } catch (error) {
      console.error('Product API request failed:', error)
      console.error('Product Request URL:', url)
      console.error('Product Request config:', config)
      throw error
    }
  }

  async getProducts(): Promise<Product[]> {
    return this.request<Product[]>('/')
  }

  async getProduct(id: string): Promise<Product> {
    return this.request<Product>(`/${id}`)
  }

  async createProduct(product: ProductCreate): Promise<Product> {
    return this.request<Product>('/', {
      method: 'POST',
      body: JSON.stringify(product),
    })
  }

  async updateProduct(id: string, product: ProductUpdate): Promise<Product> {
    return this.request<Product>(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    })
  }

  async deleteProduct(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/${id}`, {
      method: 'DELETE',
    })
  }
}

export const productsApi = new ProductsApi() 