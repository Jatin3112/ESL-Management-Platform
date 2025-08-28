// Simple API configuration
const BASE_URL = "https://esl-management-platform.onrender.com/";

// Helper function to make API calls
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: defaultHeaders,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("API Call failed:", error);
    throw error;
  }
}

export const storesApi = {
  // Get all stores
  getStores: async (token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall("/stores/", { headers });
  },

  // Get store by ID
  getStore: async (id: string, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall(`/stores/${id}`, { headers });
  },

  // Create new store
  createStore: async (storeData: any, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall("/stores/", {
      method: "POST",
      headers,
      body: JSON.stringify(storeData),
    });
  },

  // Update store
  updateStore: async (id: string, storeData: any, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall(`/stores/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(storeData),
    });
  },

  // Delete store
  deleteStore: async (id: string, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall(`/stores/${id}`, {
      method: "DELETE",
      headers,
    });
  },
};

export const productsApi = {
  // Get all products
  getProducts: async (token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall("/products/", { headers });
  },

  // Get product by ID
  getProduct: async (id: string, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall(`/products/${id}`, { headers });
  },

  // Create new product
  createProduct: async (productData: any, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall("/products/", {
      method: "POST",
      headers,
      body: JSON.stringify(productData),
    });
  },

  // Update product
  updateProduct: async (id: string, productData: any, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall(`/products/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(productData),
    });
  },

  // Delete product
  deleteProduct: async (id: string, token?: string) => {
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return apiCall(`/products/${id}`, {
      method: "DELETE",
      headers,
    });
  },
};
