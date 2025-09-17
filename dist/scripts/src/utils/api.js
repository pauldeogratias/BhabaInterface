// // src/utils/api.ts
// const API_BASE = "https://bhaba11.onrender.com";
// export interface Product {
//   id: string;
//   productId: string;
//   product_name: string;
//   price: number;
//   description: string;
//   discount: number;
//   details: string;
//   tier_pricing: string[];
//   product_images: string[];
//   mobile_number: string;
//   isAvailable: boolean;
//   moq: number;
//   added_at: string;
//   vendorId: string;
//   vendorName: string;
//   categoryId: string;
//   categoryName: string;
// }
// export interface Vendor {
//   id: string;
//   store_name: string;
//   store_logo: string;
// }
// export interface Category {
//   id: string;
//   category_name: string;
// }
// export interface SearchParams {
//   q?: string;
//   limit?: number;
//   offset?: number;
//   category?: string;
//   vendor?: string;
//   minPrice?: number;
//   maxPrice?: number;
//   inStock?: boolean;
//   sortBy?: 'relevance' | 'price-asc' | 'price-desc' | 'newest' | 'discount';
// }
// export interface SearchResult {
//   hits: Product[];
//   totalHits: number;
//   totalPages: number;
//   currentPage: number;
// }
// export interface PaginatedResponse<T> {
//   data: T[];
//   total: number;
// }
// /**
//  * Handles API responses with proper error handling
//  */
// const handleResponse = async <T = unknown>(response: Response): Promise<T> => {
//   const contentType = response.headers.get('content-type');
//   if (!response.ok) {
//     if (contentType?.includes('application/json')) {
//       const error = await response.json();
//       throw new Error(error.message || `Request failed with status ${response.status}`);
//     }
//     throw new Error(await response.text());
//   }
//   if (contentType?.includes('application/json')) {
//     return response.json();
//   }
//   return response.text() as unknown as T;
// };
// /**
//  * Fetches a single product by ID
//  */
// export const fetchProductById = async (id: string): Promise<Product> => {
//   const response = await fetch(`${API_BASE}/products/${id}`);
//   return handleResponse<Product>(response);
// };
// /**
//  * Fetches all products with pagination
//  */
// export const fetchAllProducts = async (
//   limit = 20,
//   offset = 0
// ): Promise<PaginatedResponse<Product>> => {
//   const response = await fetch(
//     `${API_BASE}/products?limit=${limit}&offset=${offset}`
//   );
//   return handleResponse<PaginatedResponse<Product>>(response);
// };
// /**
//  * Fetches all vendors
//  */
// export const fetchVendors = async (): Promise<Vendor[]> => {
//   const response = await fetch(`${API_BASE}/vendors`);
//   return handleResponse<Vendor[]>(response);
// };
// /**
//  * Fetches a single vendor by ID
//  */
// export const fetchVendorById = async (vendorId: string): Promise<Vendor> => {
//   const response = await fetch(`${API_BASE}/vendors/${vendorId}`);
//   return handleResponse<Vendor>(response);
// };
// /**
//  * Fetches categories for a specific vendor
//  */
// export const fetchVendorCategories = async (
//   vendorId: string
// ): Promise<Category[]> => {
//   const response = await fetch(`${API_BASE}/vendors/${vendorId}/categories`);
//   return handleResponse<Category[]>(response);
// };
// /**
//  * Fetches products for a specific vendor
//  */
// export const fetchVendorProducts = async (
//   vendorId: string,
//   limit = 20,
//   offset = 0
// ): Promise<PaginatedResponse<Product>> => {
//   const response = await fetch(
//     `${API_BASE}/vendors/${vendorId}/products?limit=${limit}&offset=${offset}`
//   );
//   return handleResponse<PaginatedResponse<Product>>(response);
// };
// /**
//  * Fetches products by category
//  */
// export const fetchProductsByCategory = async (
//   categoryId: string,
//   limit = 20,
//   offset = 0
// ): Promise<PaginatedResponse<Product>> => {
//   const response = await fetch(
//     `${API_BASE}/categories/${categoryId}/products?limit=${limit}&offset=${offset}`
//   );
//   return handleResponse<PaginatedResponse<Product>>(response);
// };
// /**
//  * Fetches all categories
//  */
// export const fetchAllCategories = async (): Promise<Category[]> => {
//   const response = await fetch(`${API_BASE}/categories`);
//   return handleResponse<Category[]>(response);
// };
// /**
//  * Searches products with advanced filters
//  */
// export const searchProducts = async (
//   params: SearchParams
// ): Promise<SearchResult> => {
//   const queryParams = new URLSearchParams();
//   // Add all defined parameters to the query
//   Object.entries(params).forEach(([key, value]) => {
//     if (value !== undefined) {
//       queryParams.append(key, String(value));
//     }
//   });
//   const response = await fetch(`${API_BASE}/search?${queryParams.toString()}`);
//   return handleResponse<SearchResult>(response);
// };
// /**
//  * Client-side fetch with timeout
//  */
// export const fetchWithTimeout = async (
//   url: string,
//   options: RequestInit = {},
//   timeout = 8000
// ): Promise<Response> => {
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), timeout);
//   try {
//     const response = await fetch(url, {
//       ...options,
//       signal: controller.signal
//     });
//     clearTimeout(timeoutId);
//     return response;
//   } catch (error) {
//     clearTimeout(timeoutId);
//     throw new Error(`Request timed out after ${timeout}ms`);
//   }
// };
// /**
//  * Slugify a product name for URLs
//  */
// export const slugify = (text: string): string => {
//   return text
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)/g, '');
// };
// /**
//  * Format currency for display
//  */
// export const formatCurrency = (amount: number): string => {
//   return new Intl.NumberFormat('en-TZ', {
//     style: 'currency',
//     currency: 'TZS'
//   }).format(amount);
// };
// /**
//  * Transform Firebase URL to ImageKit URL
//  */
// export const transformImageUrl = (firebaseUrl: string): string => {
//   if (!firebaseUrl) return '';
//   try {
//     const urlObj = new URL(firebaseUrl);
//     const encodedPath = urlObj.pathname.split('/o/')[1];
//     if (!encodedPath) return firebaseUrl;
//     const decodedPath = decodeURIComponent(encodedPath);
//     return `https://ik.imagekit.io/3n0rrhtkz/firebase_files/${decodedPath}`;
//   } catch (error) {
//     console.error('Error transforming image URL:', error);
//     return firebaseUrl;
//   }
// };
// src/utils/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
/**
 * Handles API responses with proper error handling
 */
const handleResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    if (!response.ok) {
        if (contentType?.includes('application/json')) {
            const error = await response.json();
            throw new Error(error.message || `Request failed with status ${response.status}`);
        }
        throw new Error(await response.text());
    }
    if (contentType?.includes('application/json')) {
        return response.json();
    }
    return response.text();
};
/**
 * Fetches a single product by ID
 */
export const fetchProductById = async (id) => {
    const response = await fetch(`${API_BASE}/products/${id}`);
    return handleResponse(response);
};
/**
 * Fetches all products with pagination
 */
export const fetchAllProducts = async (limit = 20, offset = 0) => {
    const response = await fetch(`${API_BASE}/products?limit=${limit}&offset=${offset}`);
    return handleResponse(response);
};
/**
 * Fetches all vendors
 */
export const fetchVendors = async () => {
    const response = await fetch(`${API_BASE}/vendors`);
    return handleResponse(response);
};
/**
 * Fetches a single vendor by ID
 */
export const fetchVendorById = async (vendorId) => {
    const response = await fetch(`${API_BASE}/vendors/${vendorId}`);
    return handleResponse(response);
};
/**
 * Fetches categories for a specific vendor
 */
export const fetchVendorCategories = async (vendorId) => {
    const response = await fetch(`${API_BASE}/vendors/${vendorId}/categories`);
    return handleResponse(response);
};
/**
 * Fetches products for a specific vendor
 */
export const fetchVendorProducts = async (vendorId, limit = 20, offset = 0) => {
    const response = await fetch(`${API_BASE}/vendors/${vendorId}/products?limit=${limit}&offset=${offset}`);
    return handleResponse(response);
};
/**
 * Fetches products by category
 */
export const fetchProductsByCategory = async (categoryId, limit = 20, offset = 0) => {
    const response = await fetch(`${API_BASE}/categories/${categoryId}/products?limit=${limit}&offset=${offset}`);
    return handleResponse(response);
};
/**
 * Fetches all categories
 */
export const fetchAllCategories = async () => {
    const response = await fetch(`${API_BASE}/categories`);
    return handleResponse(response);
};
/**
 * Searches products with advanced filters
 */
export const searchProducts = async (params) => {
    const queryParams = new URLSearchParams();
    // Add all defined parameters to the query
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            queryParams.append(key, String(value));
        }
    });
    const response = await fetch(`${API_BASE}/search?${queryParams.toString()}`);
    return handleResponse(response);
};
/**
 * Client-side fetch with timeout
 */
export const fetchWithTimeout = async (url, options = {}, timeout = 8000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    }
    catch (error) {
        clearTimeout(timeoutId);
        throw new Error(`Request timed out after ${timeout}ms`);
    }
};
/**
 * Slugify a product name for URLs
 */
export const slugify = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};
/**
 * Format currency for display
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-TZ', {
        style: 'currency',
        currency: 'TZS'
    }).format(amount);
};
/**
 * Transform Firebase URL to ImageKit URL
 */
export const transformImageUrl = (firebaseUrl) => {
    if (!firebaseUrl)
        return '';
    try {
        const urlObj = new URL(firebaseUrl);
        const encodedPath = urlObj.pathname.split('/o/')[1];
        if (!encodedPath)
            return firebaseUrl;
        const decodedPath = decodeURIComponent(encodedPath);
        return `https://ik.imagekit.io/3n0rrhtkz/firebase_files/${decodedPath}`;
    }
    catch (error) {
        console.error('Error transforming image URL:', error);
        return firebaseUrl;
    }
};
