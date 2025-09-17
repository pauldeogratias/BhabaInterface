// types/api.ts
export interface SearchParams {
  q?: string;
  limit?: number;
  offset?: number;
  category?: string;
  vendor?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: string;
}