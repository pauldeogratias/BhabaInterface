// // // src/pages/index.tsx
// // import React, { useState, useMemo, useEffect } from 'react'
// // import { useRouter } from 'next/router'
// // import Head from 'next/head'
// // import {  AlertCircle, X } from 'lucide-react'
// // import ProductCard from '../components/ProductCard'
// // import FilterModal from '../components/FilterModal'
// // import HeaderBar from '../components/HeaderBar'
// // import type { NextPage } from 'next'
// // import Image from 'next/image'
// // import BottomNavigation from '../components/BottomNavigation';


// // interface Product {
// //   id: string
// //   productId: string
// //   product_name: string
// //   price: number
// //   description: string
// //   discount: number
// //   details: string
// //   tier_pricing: string[]
// //   product_images: string[]
// //   mobile_number: string
// //   isAvailable: boolean
// //   moq: number
// //   added_at: string
// //   vendorId: string
// //   vendorName: string
// //   categoryId: string
// //   categoryName: string
// // }

// // interface Vendor {
// //   id: string
// //   store_name: string
// //   store_logo: string
// // }

// // interface HomeProps {
// //   products: Product[]
// //   vendors: Vendor[]
// //   categories: string[]
// // }

// // const Home: NextPage<HomeProps> = ({ products = [], vendors = [], categories = [] }) => {
// //   const router = useRouter()
// //   const [searchQuery, setSearchQuery] = useState('')
// //   const [filters, setFilters] = useState({
// //     categories: [] as string[],
// //     vendors: [] as string[],
// //     priceRange: [0, 10000000] as [number, number],
// //     inStock: false
// //   })
// //   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
// //   const [showFilters, setShowFilters] = useState(false)
// //   const [currentPage, setCurrentPage] = useState(1)
// //   const [showAllProducts, setShowAllProducts] = useState(true)
// //   const [sortOption, setSortOption] = useState('relevance')
// //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)


// // const categoryImages = {
// //   Electronics: '/category-images/electronics.jpeg',
// //   Shoes: '/category-images/shoes.webp',
// //   Clothing: '/category-images/clothing.webp',
// //   Automotive: '/category-images/automotive.webp',
// //   Bags: '/category-images/bags.webp',
// //   Cars: '/category-images/cars.jpg',
// //   "Computer & Accessories": '/category-images/computer-accessories.png',
// //   Furniture: '/category-images/furniture.jpeg',
// //   "Grains & Pulses": '/category-images/grains_pulses.jpeg',
// //   "Health & Beauty": '/category-images/health_beauty.jpeg',
// //   "Home Appliances": '/category-images/home_appliances.jpeg',
// //   "Home Textile": '/category-images/home_textile.jpeg',
// //   "Jewelry & Watches": '/category-images/jewelry_watches.jpeg',
// //   Phone: '/category-images/phone.jpg',
// //   Smokeables: '/category-images/smokeables.webp',
// //   "Sports & Outdoors": '/category-images/sports_outdoors.jpeg',
// // }

// //   const filteredProducts = useMemo(() => {
// //     let filtered = products
    
// //     // Search query filtering
// //     if (searchQuery) {
// //       filtered = filtered.filter(product => {
// //         const searchLower = searchQuery.toLowerCase()
// //         return (
// //           product.product_name.toLowerCase().includes(searchLower) ||
// //           product.description.toLowerCase().includes(searchLower) ||
// //           product.vendorName.toLowerCase().includes(searchLower) ||
// //           product.categoryName.toLowerCase().includes(searchLower)
// //       )})
// //     }
    
// //     // Category filtering
// //     if (filters.categories.length > 0) {
// //       filtered = filtered.filter(product => 
// //         filters.categories.includes(product.categoryName)
// //   )}
    
// //     // Vendor filtering
// //     if (filters.vendors.length > 0) {
// //       filtered = filtered.filter(product => 
// //         filters.vendors.includes(product.vendorId)
// //   )}
    
// //     // Price range filtering
// //     filtered = filtered.filter(product => {
// //       const price = product.discount > 0 
// //         ? product.price * (1 - product.discount / 100) 
// //         : product.price
// //       return price >= filters.priceRange[0] && price <= filters.priceRange[1]
// //     })
    
// //     // Stock status filtering
// //     if (filters.inStock) {
// //       filtered = filtered.filter(product => product.isAvailable)
// //     }
    
// //     // Sorting
// //     switch(sortOption) {
// //       case 'price-asc':
// //         filtered.sort((a, b) => {
// //           const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
// //           const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
// //           return priceA - priceB
// //         })
// //         break
// //       case 'price-desc':
// //         filtered.sort((a, b) => {
// //           const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
// //           const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
// //           return priceB - priceA
// //         })
// //         break
// //       case 'newest':
// //         filtered.sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime())
// //         break
// //       case 'discount':
// //         filtered.sort((a, b) => b.discount - a.discount)
// //         break
// //       case 'relevance':
// //       default:
// //         if (searchQuery) {
// //           filtered.sort((a, b) => {
// //             const aMatches = [
// //               a.product_name.toLowerCase().includes(searchQuery.toLowerCase()),
// //               a.description.toLowerCase().includes(searchQuery.toLowerCase()),
// //               a.vendorName.toLowerCase().includes(searchQuery.toLowerCase())
// //             ].filter(Boolean).length
            
// //             const bMatches = [
// //               b.product_name.toLowerCase().includes(searchQuery.toLowerCase()),
// //               b.description.toLowerCase().includes(searchQuery.toLowerCase()),
// //               b.vendorName.toLowerCase().includes(searchQuery.toLowerCase())
// //             ].filter(Boolean).length
            
// //             return bMatches - aMatches
// //           })
// //         }
// //         break
// //     }
    
// //     return filtered
// //   }, [products, searchQuery, filters, sortOption])

// //   const productsPerPage = 12
// //   const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

// //  const currentProducts = filteredProducts 

// //   useEffect(() => {
// //     setCurrentPage(1)
// //   }, [searchQuery, filters])

// //   const handleProductClick = (product: Product) => {
// //     const slug = `${product.product_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}_${product.id}`
// //     router.push(`/product/${slug}`)
// //   }

// //   const handlePageChange = (page: number) => {
// //     setShowAllProducts(false)
// //     setCurrentPage(page)
// //   }

// //   const handleSeeAll = () => {
// //     setShowAllProducts(true)
// //     setCurrentPage(1)
// //   }


// //     const [showWholesale, setShowWholesale] = useState(false);
// //   const [wholesaleVendors] = useState<string[]>([
// //     'dPpBnTL3CDN879g7X1cRVoRG5wn2',
// //     // Add your specific vendor IDs here
// //   ]);


// //   const handleWholesaleClick = () => {
// //     setShowWholesale(true);
// //     setFilters({
// //       ...filters,
// //       vendors: wholesaleVendors
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 pb-16 w-full overflow-x-hidden">
// //       <Head>
// //         <title>Bhaba Marketplace - Shop Online in Tanzania</title>
// //         <meta name="description" content="Discover the best products at affordable prices in Tanzania. Shop electronics, clothing, shoes and more." />
// //         <meta name="keywords" content="Tanzania ecommerce, online shopping, Bhaba Marketplace, electronics, clothing, shoes" />
// //         <meta property="og:title" content="Bhaba Marketplace - Shop Online in Tanzania" />
// //         <meta property="og:description" content="Discover the best products at affordable prices in Tanzania." />
// //         <meta property="og:type" content="website" />
// //         <meta property="og:url" content="https://yourstore.com" />
// //         <meta property="og:image" content="https://yourstore.com/logo.png" />
// //       </Head>

// //       <HeaderBar 
// //         searchQuery={searchQuery}
// //         setSearchQuery={setSearchQuery}
// //         viewMode={viewMode}
// //         setViewMode={setViewMode}
// //         setShowFilters={setShowFilters}
// //         sortOption={sortOption}
// //         setSortOption={setSortOption}
// //       />

// //       <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
// //          {showWholesale && (
// //           <div className="mb-4 flex items-center justify-between">
// //             <h2 className="text-lg font-semibold text-gray-900">
// //               Wholesale Products
// //             </h2>
// //             <button 
// //               onClick={() => {
// //                 setShowWholesale(false);
// //                 setFilters({
// //                   ...filters,
// //                   vendors: []
// //                 });
// //               }}
// //               className="text-blue-500 text-sm"
// //             >
// //               Show All Products
// //             </button>
// //           </div>
// //         )}
        
// //         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
// //           <div>
// //             <h2 className="text-base sm:text-lg font-semibold text-gray-900">
// //               {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
// //             </h2>
// //             <p className="text-xs sm:text-sm text-gray-600">
// //               {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
// //             </p>
// //           </div>
          
// //           {(filters.categories.length > 0 || filters.vendors.length > 0 || filters.inStock) && (
// //             <div className="flex flex-wrap items-center gap-1 sm:gap-2">
// //               <span className="text-xs sm:text-sm text-gray-600">Active filters:</span>
// //               {filters.categories.map(categoryName => (
// //                 <span key={categoryName} className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs">
// //                   {categoryName}
// //                   <button
// //                     onClick={() => {
// //                       setFilters({
// //                         ...filters,
// //                         categories: filters.categories.filter(name => name !== categoryName)
// //                       })
// //                     }}
// //                     className="hover:text-blue-600"
// //                   >
// //                     <X className="h-3 w-3" />
// //                   </button>
// //                 </span>
// //               ))}
// //               {filters.vendors.map(vendorId => {
// //                 const vendor = vendors.find(v => v.id === vendorId)
// //                 return vendor ? (
// //                   <span key={vendorId} className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs">
// //                     {vendor.store_name}
// //                     <button
// //                       onClick={() => {
// //                         setFilters({
// //                           ...filters,
// //                           vendors: filters.vendors.filter(id => id !== vendorId)
// //                         })
// //                       }}
// //                       className="hover:text-green-600"
// //                     >
// //                       <X className="h-3 w-3" />
// //                     </button>
// //                   </span>
// //                 ) : null
// //               })}
// //               {filters.inStock && (
// //                 <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs">
// //                   In Stock Only
// //                   <button
// //                     onClick={() => setFilters({ ...filters, inStock: false })}
// //                     className="hover:text-purple-600"
// //                   >
// //                     <X className="h-3 w-3" />
// //                   </button>
// //                 </span>
// //               )}
// //             </div>
// //           )}
// //         </div>

// //         {/* Category Filter Chips */}

// //       <div className="mb-4 sm:mb-6 overflow-x-auto">
// //   <div className="flex gap-3 pb-2">
// //     {categories.map((categoryName) => (
    

// //       <button
// //   key={categoryName}
// //   onClick={() => {
// //     router.push(`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`)
// //   }}
// //   className={`flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-lg transition-all ${
// //     selectedCategory === categoryName
// //       ? 'bg-blue-50 border-2 border-blue-500'
// //       : 'bg-white border border-gray-200 hover:border-gray-300'
// //   }`}
// // >

// //         {categoryImages[categoryName as keyof typeof categoryImages] && (
// //           <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-1 overflow-hidden">
// //             <Image
// //               src={categoryImages[categoryName as keyof typeof categoryImages]}
// //               alt={categoryName}
// //               fill
// //               className="object-cover rounded-md"
// //               loading="lazy"
// //             />
// //           </div>
// //         )}
// //         <span className={`text-xs sm:text-sm text-center font-medium px-1 ${
// //           filters.categories.includes(categoryName)
// //             ? 'text-blue-700'
// //             : 'text-gray-700'
// //         }`}>
// //           {categoryName.split(' ')[0]}
// //         </span>
// //       </button>
// //     ))}
// //   </div>
// // </div>


// //         {currentProducts.length === 0 ? (
// //           <div className="text-center py-12">
// //             <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
// //             <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">No products found</h3>
// //             <p className="text-xs sm:text-sm text-gray-600">Try adjusting your search or filters</p>
// //           </div>
// //         ) : (
// //           <div className={
// //             viewMode === 'grid'
// //               ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
// //               : "space-y-4"
// //           }>
// //             {currentProducts.map((product) => (
// //               <ProductCard
// //                 key={product.id}
// //                 product={product}
// //                 onClick={handleProductClick}
// //                 viewMode={viewMode}
// //               />
// //             ))}
// //           </div>
// //         )}

// //         {totalPages > 1 && (
// //           <div className="flex items-center justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
// //             <button
// //               onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
// //               disabled={currentPage === 1 || showAllProducts}
// //               className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               Previous
// //             </button>
            
// //             {!showAllProducts && Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
// //               let pageNumber: number
// //               if (totalPages <= 5) {
// //                 pageNumber = i + 1
// //               } else if (currentPage <= 3) {
// //                 pageNumber = i + 1
// //               } else if (currentPage >= totalPages - 2) {
// //                 pageNumber = totalPages - 4 + i
// //               } else {
// //                 pageNumber = currentPage - 2 + i
// //               }
              
// //               return (
// //                 <button
// //                   key={pageNumber}
// //                   onClick={() => handlePageChange(pageNumber)}
// //                   className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${
// //                     currentPage === pageNumber
// //                       ? 'bg-blue-500 text-white'
// //                       : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   {pageNumber}
// //                 </button>
// //               )
// //             })}
            
// //             <button
// //               onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
// //               disabled={currentPage === totalPages || showAllProducts}
// //               className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               Next
// //             </button>

// //             {showAllProducts ? (
// //   <button
// //     onClick={() => {
// //       setShowAllProducts(false)
// //       handlePageChange(1)
// //     }}
// //     className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
// //   >
// //     Show Pages
// //   </button>
// // ) : (
// //   <button
// //     onClick={handleSeeAll}
// //     className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
// //   >
// //     See All
// //   </button>
// // )}
// //           </div>
// //         )}
// //       </main>

// //       <BottomNavigation onWholesaleClick={handleWholesaleClick} />

// //       <FilterModal
// //         isOpen={showFilters}
// //         onClose={() => setShowFilters(false)}
// //         categories={categories.map(name => ({ id: name, category_name: name }))}
// //         vendors={vendors}
// //         filters={filters}
// //         onFiltersChange={setFilters}
// //       />
// //     </div>
// //   )
// // }


// // export async function getStaticProps() {
// //   // const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
// //     const isBrowser = typeof window !== 'undefined';
// // const isLocalhost = isBrowser && window.location.hostname === 'localhost';

// //   const apiBase =  (
// //   isLocalhost
// //     ? 'http://localhost:5000'
// //     : 'http://192.168.1.165:5000'
// // );
  
// //   try {
// //     const [featuredProductsRes, vendorsRes, categoriesRes] = await Promise.all([
// //       // fetch(`${apiBase}/search?limit=24&sortBy=newest`),
// //       fetch(`${apiBase}/search?limit=10000`),
// //       fetch(`${apiBase}/vendors`),
// //       fetch(`${apiBase}/categories`)
// //     ])

// //     // Handle non-JSON responses
// //     const parseResponse = async (res: Response) => {
// //       const text = await res.text()
// //       try {
// //         return text ? JSON.parse(text) : []
// //       } catch (e) {
// //         console.error('Failed to parse response:', text, e)
// //         return []
// //       }
// //     }

// //     return {
// //       props: {
// //         products: await parseResponse(featuredProductsRes),
// //         vendors: await parseResponse(vendorsRes),
// //         categories: await parseResponse(categoriesRes),
// //       },
// //       revalidate: 3600
// //     }
// //   } catch (error) {
// //     console.error('Error fetching data:', error)
// //     return {
// //       props: {
// //         products: [],
// //         vendors: [],
// //         categories: []
// //       }
// //     }
// //   }
// // }
// // export default Home


// import React, { useState, useMemo, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import Head from 'next/head'
// import { AlertCircle, X } from 'lucide-react'
// import ProductCard from '../components/ProductCard'
// import FilterModal from '../components/FilterModal'
// import HeaderBar from '../components/HeaderBar'
// import type { NextPage } from 'next'
// import Image from 'next/image'
// import BottomNavigation from '../components/BottomNavigation'
// import { slugify } from '../utils/api'

// interface Product {
//   id: string
//   productId: string
//   product_name: string
//   price: number
//   description: string
//   discount: number
//   details: string
//   tier_pricing: string[]
//   product_images: string[]
//   mobile_number: string
//   isAvailable: boolean
//   moq: number
//   added_at: string
//   vendorId: string
//   vendorName: string
//   categoryId: string
//   categoryName: string
// }

// interface Vendor {
//   id: string
//   store_name: string
//   store_logo: string
// }

// interface HomeProps {
//   products: Product[]
//   vendors: Vendor[]
//   categories: string[]
// }

// const Home: NextPage<HomeProps> = ({ products = [], vendors = [], categories = [] }) => {
//   const router = useRouter()
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filters, setFilters] = useState({
//     categories: [] as string[],
//     vendors: [] as string[],
//     priceRange: [0, 10000000] as [number, number],
//     inStock: false
//   })
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [showFilters, setShowFilters] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [showAllProducts, setShowAllProducts] = useState(true)
//   const [sortOption, setSortOption] = useState('relevance')
//   const [selectedCategory] = useState<string | null>(null)

//   const categoryImages = {
//     Electronics: '/category-images/electronics.jpeg',
//     Shoes: '/category-images/shoes.webp',
//     Clothing: '/category-images/clothing.webp',
//     Automotive: '/category-images/automotive.webp',
//     Bags: '/category-images/bags.webp',
//     Cars: '/category-images/cars.jpg',
//     "Computer & Accessories": '/category-images/computer-accessories.png',
//     Furniture: '/category-images/furniture.jpeg',
//     "Grains & Pulses": '/category-images/grains_pulses.jpeg',
//     "Health & Beauty": '/category-images/health_beauty.jpeg',
//     "Home Appliances": '/category-images/home_appliances.jpeg',
//     "Home Textile": '/category-images/home_textile.jpeg',
//     "Jewelry & Watches": '/category-images/jewelry_watches.jpeg',
//     Phone: '/category-images/phone.jpg',
//     Smokeables: '/category-images/smokeables.webp',
//     "Sports & Outdoors": '/category-images/sports_outdoors.jpeg',
//     "Office Supplies" : '/category-images/office_supplies.jpeg',
//   }

//   const filteredProducts = useMemo(() => {
//     let filtered = products
    
//     if (searchQuery) {
//       filtered = filtered.filter(product => {
//         const searchLower = searchQuery.toLowerCase()
//           // Debugging log - see if any field is missing
//   if (!product.product_name || !product.description || !product.vendorName || !product.categoryName) {
//     console.warn("Product with missing data:", product);
//   }
//         return (
//          (product.product_name || '').toLowerCase().includes(searchLower) ||
//     (product.description || '').toLowerCase().includes(searchLower) ||
//     (product.vendorName || '').toLowerCase().includes(searchLower) ||
//     (product.categoryName || '').toLowerCase().includes(searchLower)
//       )})
//     }
    
//     if (filters.categories.length > 0) {
//       filtered = filtered.filter(product => 
//         filters.categories.includes(product.categoryName)
//       )
//     }
    
//     if (filters.vendors.length > 0) {
//       filtered = filtered.filter(product => 
//         filters.vendors.includes(product.vendorId)
//       )
//     }
    
//     filtered = filtered.filter(product => {
//       const price = product.discount > 0 
//         ? product.price * (1 - product.discount / 100) 
//         : product.price
//       return price >= filters.priceRange[0] && price <= filters.priceRange[1]
//     })
    
//     if (filters.inStock) {
//       filtered = filtered.filter(product => product.isAvailable)
//     }
    
//     switch(sortOption) {
//       case 'price-asc':
//         filtered.sort((a, b) => {
//           const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
//           const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
//           return priceA - priceB
//         })
//         break
//       case 'price-desc':
//         filtered.sort((a, b) => {
//           const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
//           const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
//           return priceB - priceA
//         })
//         break
//       case 'newest':
//         filtered.sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime())
//         break
//       case 'discount':
//         filtered.sort((a, b) => b.discount - a.discount)
//         break
//       case 'relevance':
//       default:
//         if (searchQuery) {
//           filtered.sort((a, b) => {
//             const aMatches = [
//   (a.product_name || '').toLowerCase().includes(searchQuery.toLowerCase()),
//   (a.description || '').toLowerCase().includes(searchQuery.toLowerCase()),
//   (a.vendorName || '').toLowerCase().includes(searchQuery.toLowerCase())
// ].filter(Boolean).length;

// const bMatches = [
//   (b.product_name || '').toLowerCase().includes(searchQuery.toLowerCase()),
//   (b.description || '').toLowerCase().includes(searchQuery.toLowerCase()),
//   (b.vendorName || '').toLowerCase().includes(searchQuery.toLowerCase())
// ].filter(Boolean).length;            
//             return bMatches - aMatches
//           })
//         }
//         break
//     }
    
//     return filtered
//   }, [products, searchQuery, filters, sortOption])

//   const productsPerPage = 12
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
//   const currentProducts = filteredProducts 

//   useEffect(() => {
//     setCurrentPage(1)
//   }, [searchQuery, filters])

//   const handleProductClick = (product: Product) => {
//     const slug = `${slugify(product.product_name)}_${product.id}`
//     //const categorySlug = product.categoryName.toLowerCase().replace(/\s+/g, '-')
//     const categorySlug = (product.categoryName || '').toLowerCase().replace(/\s+/g, '-');
//     router.push(`/product/${categorySlug}/${slug}`)
//   }

//   const handlePageChange = (page: number) => {
//     setShowAllProducts(false)
//     setCurrentPage(page)
//   }

//   const handleSeeAll = () => {
//     setShowAllProducts(true)
//     setCurrentPage(1)
//   }

//   const [showWholesale, setShowWholesale] = useState(false);
//   const [wholesaleVendors] = useState<string[]>([
//     'dPpBnTL3CDN879g7X1cRVoRG5wn2',
//   ]);

//   const handleWholesaleClick = () => {
//     setShowWholesale(true);
//     setFilters({
//       ...filters,
//       vendors: wholesaleVendors
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb-16 w-full overflow-x-hidden">
//       <Head>
//         <title>Bhaba Marketplace - Shop Online in Tanzania</title>
//         <meta name="description" content="Discover the best products at affordable prices in Tanzania. Shop electronics, clothing, shoes and more." />
//       </Head>

//       <HeaderBar 
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         viewMode={viewMode}
//         setViewMode={setViewMode}
//         setShowFilters={setShowFilters}
//         sortOption={sortOption}
//         setSortOption={setSortOption}
//       />

//       <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
//         {showWholesale && (
//           <div className="mb-4 flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-gray-900">
//               Wholesale Products
//             </h2>
//             <button 
//               onClick={() => {
//                 setShowWholesale(false);
//                 setFilters({
//                   ...filters,
//                   vendors: []
//                 });
//               }}
//               className="text-blue-500 text-sm"
//             >
//               Show All Products
//             </button>
//           </div>
//         )}
        
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
//           <div>
//             <h2 className="text-base sm:text-lg font-semibold text-gray-900">
//               {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
//             </h2>
//             <p className="text-xs sm:text-sm text-gray-600">
//               {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
//             </p>
//           </div>
          
//           {(filters.categories.length > 0 || filters.vendors.length > 0 || filters.inStock) && (
//             <div className="flex flex-wrap items-center gap-1 sm:gap-2">
//               <span className="text-xs sm:text-sm text-gray-600">Active filters:</span>
//               {filters.categories.map(categoryName => (
//                 <span key={categoryName} className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs">
//                   {categoryName}
//                   <button
//                     onClick={() => {
//                       setFilters({
//                         ...filters,
//                         categories: filters.categories.filter(name => name !== categoryName)
//                       })
//                     }}
//                     className="hover:text-blue-600"
//                   >
//                     <X className="h-3 w-3" />
//                   </button>
//                 </span>
//               ))}
//               {filters.vendors.map(vendorId => {
//                 const vendor = vendors.find(v => v.id === vendorId)
//                 return vendor ? (
//                   <span key={vendorId} className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs">
//                     {vendor.store_name}
//                     <button
//                       onClick={() => {
//                         setFilters({
//                           ...filters,
//                           vendors: filters.vendors.filter(id => id !== vendorId)
//                         })
//                       }}
//                       className="hover:text-green-600"
//                     >
//                       <X className="h-3 w-3" />
//                     </button>
//                   </span>
//                 ) : null
//               })}
//               {filters.inStock && (
//                 <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs">
//                   In Stock Only
//                   <button
//                     onClick={() => setFilters({ ...filters, inStock: false })}
//                     className="hover:text-purple-600"
//                   >
//                     <X className="h-3 w-3" />
//                   </button>
//                 </span>
//               )}
//             </div>
//           )}
//         </div>

//         <div className="mb-4 sm:mb-6 overflow-x-auto">
//           <div className="flex gap-3 pb-2">
//             {categories.map((categoryName) => (
//               <button
//                 key={categoryName}
//                 onClick={() => {
//                   router.push(`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`)
//                 }}
//                 className={`flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-lg transition-all ${
//                   selectedCategory === categoryName
//                     ? 'bg-blue-50 border-2 border-blue-500'
//                     : 'bg-white border border-gray-200 hover:border-gray-300'
//                 }`}
//               >
//                 {categoryImages[categoryName as keyof typeof categoryImages] && (
//                   <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-1 overflow-hidden">
//                     <Image
//                       src={categoryImages[categoryName as keyof typeof categoryImages]}
//                       alt={categoryName}
//                       fill
//                       className="object-cover rounded-md"
//                       loading="lazy"
//                     />
//                   </div>
//                 )}
//                 <span className={`text-xs sm:text-sm text-center font-medium px-1 ${
//                   filters.categories.includes(categoryName)
//                     ? 'text-blue-700'
//                     : 'text-gray-700'
//                 }`}>
//                   {categoryName.split(' ')[0]}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {currentProducts.length === 0 ? (
//           <div className="text-center py-12">
//             <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
//             <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">No products found</h3>
//             <p className="text-xs sm:text-sm text-gray-600">Try adjusting your search or filters</p>
//           </div>
//         ) : (
//           // <div className={
//           //   viewMode === 'grid'
//           //     ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 sm:gap-6"
//           //     : "space-y-4"
//           // }>

//            <div className={
//                  viewMode === 'grid'
//                   ? "columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4"
//                    : "space-y-4"
//             }>
//             {currentProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onClick={handleProductClick}
//                 viewMode={viewMode}
//               />
//             ))}
//           </div>
//         )}

//         {totalPages > 1 && (
//           <div className="flex items-center justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
//             <button
//               onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//               disabled={currentPage === 1 || showAllProducts}
//               className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Previous
//             </button>
            
//             {!showAllProducts && Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//               let pageNumber: number
//               if (totalPages <= 5) {
//                 pageNumber = i + 1
//               } else if (currentPage <= 3) {
//                 pageNumber = i + 1
//               } else if (currentPage >= totalPages - 2) {
//                 pageNumber = totalPages - 4 + i
//               } else {
//                 pageNumber = currentPage - 2 + i
//               }
              
//               return (
//                 <button
//                   key={pageNumber}
//                   onClick={() => handlePageChange(pageNumber)}
//                   className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${
//                     currentPage === pageNumber
//                       ? 'bg-blue-500 text-white'
//                       : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
//                   }`}
//                 >
//                   {pageNumber}
//                 </button>
//               )
//             })}
            
//             <button
//               onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
//               disabled={currentPage === totalPages || showAllProducts}
//               className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Next
//             </button>

//             {showAllProducts ? (
//               <button
//                 onClick={() => {
//                   setShowAllProducts(false)
//                   handlePageChange(1)
//                 }}
//                 className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//               >
//                 Show Pages
//               </button>
//             ) : (
//               <button
//                 onClick={handleSeeAll}
//                 className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//               >
//                 See All
//               </button>
//             )}
//           </div>
//         )}
//       </main>

//       <BottomNavigation onWholesaleClick={handleWholesaleClick} />

//       <FilterModal
//         isOpen={showFilters}
//         onClose={() => setShowFilters(false)}
//         categories={categories.map(name => ({ id: name, category_name: name }))}
//         vendors={vendors}
//         filters={filters}
//         onFiltersChange={setFilters}
//       />
//     </div>
//   )
// }

// export async function getStaticProps() {
//      const apiBase = "https://bhabaapi.onrender.com";
//   // const isBrowser = typeof window !== 'undefined';
//   // const isLocalhost = isBrowser && window.location.hostname === 'localhost';

//   // const apiBase = isLocalhost
//   //   ? 'http://localhost:5000'
//   //   : 'http://192.168.1.165:5000';
  
//   try {
//     const [featuredProductsRes, vendorsRes, categoriesRes] = await Promise.all([
//       fetch(`${apiBase}/search?limit=10`),
//       fetch(`${apiBase}/vendors`),
//       fetch(`${apiBase}/categories`)
//     ])

//     const parseResponse = async (res: Response) => {
//       const text = await res.text()
//       try {
//         return text ? JSON.parse(text) : []
//       } catch (e) {
//         console.error('Failed to parse response:', text, e)
//         return []
//       }
//     }

//     return {
//       props: {
//         products: await parseResponse(featuredProductsRes),
//         vendors: await parseResponse(vendorsRes),
//         categories: await parseResponse(categoriesRes),
//       },
//       revalidate: 3600
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     return {
//       props: {
//         products: [],
//         vendors: [],
//         categories: []
//       }
//     }
//   }
// }

// export default Home


// src/pages/index.tsx - Improved Homepage
import React, { useState, useMemo, useEffect, Suspense } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AlertCircle, X, ChevronRight, TrendingUp, Star, Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { slugify } from '../utils/api'
import { smartShuffle, shuffleArray } from '../utils/shuffle'

// Dynamic imports for better performance
const ProductCard = dynamic(() => import('../components/ProductCard'), {
  loading: () => <ProductCardSkeleton />
})
const FilterModal = dynamic(() => import('../components/FilterModal'))
const AppDownloadBanner = dynamic(() => import('../components/AppDownloadBanner'))

// Components
import UpdatedHeaderBar from '../components/UpdatedHeaderBar'
import BottomNavigation from '../components/BottomNavigation'
import type { NextPage } from 'next'

interface Product {
  id: string
  productId: string
  product_name: string
  price: number
  description: string
  discount: number
  details: string
  tier_pricing: string[]
  product_images: string[]
  mobile_number: string
  isAvailable: boolean
  moq: number
  added_at: string
  vendorId: string
  vendorName: string
  categoryId: string
  categoryName: string
}

interface Vendor {
  id: string
  store_name: string
  store_logo: string
}

interface HomeProps {
  products: Product[]
  vendors: Vendor[]
  categories: string[]
}

// Skeleton components for loading states
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div className="w-full aspect-square bg-gray-200" />
    <div className="p-3 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-6 bg-gray-200 rounded w-1/3" />
      <div className="flex gap-2">
        <div className="h-8 bg-gray-200 rounded flex-1" />
        <div className="h-8 bg-gray-200 rounded flex-1" />
      </div>
    </div>
  </div>
)

const CategorySkeleton = () => (
  <div className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-lg bg-white border border-gray-200 animate-pulse">
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-md mb-1" />
    <div className="h-3 bg-gray-200 rounded w-12" />
  </div>
)

const HeroSection = () => (
  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Tanzania&apos;s #1 Marketplace</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-lg">
              Shop from thousands of verified vendors across Tanzania. Quality products, competitive prices, fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">10K+</div>
              <div className="text-sm text-blue-200">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">500+</div>
              <div className="text-sm text-blue-200">Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">50K+</div>
              <div className="text-sm text-blue-200">Happy Customers</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
    Start Shopping
    <ChevronRight className="ml-2 h-4 w-4" />
  </button>
  
  <a
    href="https://play.google.com/store/apps/details?id=com.vendor.bhaba"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
  >
    Download App
  </a>
</div>

        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-2xl" />
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-32">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-800" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Quality Products</div>
                      <div className="text-xs text-blue-200">Verified sellers</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-40">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
                      <Users className="h-4 w-4 text-green-800" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Trusted Community</div>
                      <div className="text-xs text-blue-200">50K+ customers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-40">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-purple-800" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Best Prices</div>
                      <div className="text-xs text-blue-200">Competitive rates</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 h-32">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-orange-800" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Fast Delivery</div>
                      <div className="text-xs text-blue-200">Quick shipping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Home: NextPage<HomeProps> = ({ products = [], vendors = [], categories = [] }) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    categories: [] as string[],
    vendors: [] as string[],
    priceRange: [0, 10000000] as [number, number],
    inStock: false
  })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [sortOption, setSortOption] = useState('relevance')
  const [showWholesale, setShowWholesale] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading for demo - remove in production
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [])

  const categoryImages = {
    Electronics: '/category-images/electronics.jpeg',
    Shoes: '/category-images/shoes.webp',
    Clothing: '/category-images/clothing.webp',
    Automotive: '/category-images/automotive.webp',
    Bags: '/category-images/bags.webp',
    Cars: '/category-images/cars.jpg',
    "Computer & Accessories": '/category-images/computer-accessories.png',
    Furniture: '/category-images/furniture.jpeg',
    "Grains & Pulses": '/category-images/grains_pulses.jpeg',
    "Health & Beauty": '/category-images/health_beauty.jpeg',
    "Home Appliances": '/category-images/home_appliances.jpeg',
    "Home Textile": '/category-images/home_textile.jpeg',
    "Jewelry & Watches": '/category-images/jewelry_watches.jpeg',
    Phone: '/category-images/phone.jpg',
    Smokeables: '/category-images/smokeables.webp',
    "Sports & Outdoors": '/category-images/sports_outdoors.jpeg',
    "Office Supplies": '/category-images/office_supplies.jpeg',
  }

  const wholesaleVendors = ['dPpBnTL3CDN879g7X1cRVoRG5wn2']

  // const filteredProducts = useMemo(() => {
  //   let filtered = products
    
  //   if (searchQuery) {
  //     filtered = filtered.filter(product => {
  //       const searchLower = searchQuery.toLowerCase()
  //       return (
  // (product.product_name || '').toLowerCase().includes(searchLower) ||
  //       (product.description || '').toLowerCase().includes(searchLower) ||
  //       (product.vendorName || '').toLowerCase().includes(searchLower) ||
  //       (product.categoryName || '').toLowerCase().includes(searchLower)
  //       )
  //     })
  //   }
    
  //   if (filters.categories.length > 0) {
  //     filtered = filtered.filter(product => 
  //       filters.categories.includes(product.categoryName)
  //     )
  //   }
    
  //   if (filters.vendors.length > 0) {
  //     filtered = filtered.filter(product => 
  //       filters.vendors.includes(product.vendorId)
  //     )
  //   }
    
  //   filtered = filtered.filter(product => {
  //     const price = product.discount > 0 
  //       ? product.price * (1 - product.discount / 100) 
  //       : product.price
  //     return price >= filters.priceRange[0] && price <= filters.priceRange[1]
  //   })
    
  //   if (filters.inStock) {
  //     filtered = filtered.filter(product => product.isAvailable)
  //   }
    
  //   // Sorting logic
  //   switch(sortOption) {
  //     case 'price-asc':
  //       filtered.sort((a, b) => {
  //         const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
  //         const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
  //         return priceA - priceB
  //       })
  //       break
  //     case 'price-desc':
  //       filtered.sort((a, b) => {
  //         const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
  //         const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
  //         return priceB - priceA
  //       })
  //       break
  //     case 'newest':
  //       filtered.sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime())
  //       break
  //     case 'discount':
  //       filtered.sort((a, b) => b.discount - a.discount)
  //       break
  //     default:
  //       break
  //   }
    
  //   return filtered
  // }, [products, searchQuery, filters, sortOption])

  // In src/pages/index.tsx - Replace the existing filteredProducts useMemo

const filteredProducts = useMemo(() => {
  let filtered = products

  if (searchQuery) {
    filtered = filtered.filter(product => {
      const searchLower = searchQuery.toLowerCase()
      return (
        (product.product_name || '').toLowerCase().includes(searchLower) ||
        (product.description || '').toLowerCase().includes(searchLower) ||
        (product.vendorName || '').toLowerCase().includes(searchLower) ||
        (product.categoryName || '').toLowerCase().includes(searchLower)
      )
    })
  }

  if (filters.categories.length > 0) {
    filtered = filtered.filter(product =>
      filters.categories.includes(product.categoryName)
    )
  }

  if (filters.vendors.length > 0) {
    filtered = filtered.filter(product =>
      filters.vendors.includes(product.vendorId)
    )
  }

  filtered = filtered.filter(product => {
    const price = product.discount > 0
      ? product.price * (1 - product.discount / 100)
      : product.price
    return price >= filters.priceRange[0] && price <= filters.priceRange[1]
  })

  if (filters.inStock) {
    filtered = filtered.filter(product => product.isAvailable)
  }

  // Apply sorting first
  switch(sortOption) {
    case 'price-asc':
      filtered.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
        return priceA - priceB
      })
      break
    case 'price-desc':
      filtered.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
        return priceB - priceA
      })
      break
    case 'newest':
      filtered.sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime())
      break
    case 'discount':
      filtered.sort((a, b) => b.discount - a.discount)
      break
    default:
      // For 'relevance' or any other case, apply smart shuffling
      break
  }

  // Apply shuffling AFTER sorting (except for sorted options)
  if (sortOption === 'relevance' || !sortOption) {
    // Use smart shuffle to ensure category diversity
    return smartShuffle(filtered, 'categoryName')
  } else {
    // For sorted results, apply light shuffle to add variety while maintaining sort order
    return shuffleArray(filtered)
  }
}, [products, searchQuery, filters, sortOption])

  const handleProductClick = (product: Product) => {
    const slug = `${slugify(product.product_name)}_${product.id}`
    const categorySlug = product.categoryName.toLowerCase().replace(/\s+/g, '-')
    router.push(`/product/${categorySlug}/${slug}`)
  }

  const handleWholesaleClick = () => {
    setShowWholesale(true)
    setFilters({
      ...filters,
      vendors: wholesaleVendors
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Head>
        <title>Bhaba Marketplace - Shop Online in Tanzania</title>
        <meta name="description" content="Discover the best products at affordable prices in Tanzania. Shop electronics, clothing, shoes and more from verified vendors." />
        <meta name="keywords" content="Tanzania ecommerce, online shopping, Bhaba Marketplace, electronics, clothing, shoes" />
        <meta property="og:title" content="Bhaba Marketplace - Shop Online in Tanzania" />
        <meta property="og:description" content="Discover the best products at affordable prices in Tanzania." />
        <meta property="og:type" content="website" />
        <link rel="preload" href="/Bhaba_logo.png" as="image" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </Head>

      <UpdatedHeaderBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
        setShowFilters={setShowFilters}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Hero Section */}
      <HeroSection />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8">
        {showWholesale && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-blue-900">
                Wholesale Products
              </h2>
              <p className="text-sm text-blue-700">Special bulk pricing available</p>
            </div>
            <button 
              onClick={() => {
                setShowWholesale(false)
                setFilters({ ...filters, vendors: [] })
              }}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Show All Products
            </button>
          </div>
        )}
        
        {/* Active Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Featured Products'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
            </p>
          </div>
          
          {(filters.categories.length > 0 || filters.vendors.length > 0 || filters.inStock) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Filters:</span>
              {filters.categories.map(categoryName => (
                <span key={categoryName} className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {categoryName}
                  <button
                    onClick={() => {
                      setFilters({
                        ...filters,
                        categories: filters.categories.filter(name => name !== categoryName)
                      })
                    }}
                    className="hover:text-blue-600 ml-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop by Category</h3>
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4 min-w-max">
              {isLoading ? (
                Array.from({ length: 8 }, (_, i) => <CategorySkeleton key={i} />)
              ) : (
                categories.map((categoryName) => (
                  <button
                    key={categoryName}
                    onClick={() => {
                      router.push(`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`)
                    }}
                    className="flex flex-col items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex-shrink-0 group"
                  >
                    {categoryImages[categoryName as keyof typeof categoryImages] && (
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 overflow-hidden rounded-lg group-hover:scale-110 transition-transform duration-200">
                        <Image
                          src={categoryImages[categoryName as keyof typeof categoryImages]}
                          alt={categoryName}
                          fill
                          className="object-cover"
                          loading="lazy"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <span className="text-xs font-medium text-gray-700 text-center px-1 leading-tight">
                      {categoryName.split(' ')[0]}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
         <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
            {Array.from({ length: 12 }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setFilters({
                  categories: [],
                  vendors: [],
                  priceRange: [0, 10000000],
                  inStock: false
                })
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <Suspense fallback={<div>Loading products...</div>}>
           <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleProductClick}
                  viewMode="grid"
                />
              ))}
            </div>
          </Suspense>
        )}
      </main>

      <BottomNavigation onWholesaleClick={handleWholesaleClick} />
      <AppDownloadBanner position="floating" />

      <Suspense fallback={null}>
        <FilterModal
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          categories={categories.map(name => ({ id: name, category_name: name }))}
          vendors={vendors}
          filters={filters}
          onFiltersChange={setFilters}
        />
      </Suspense>
    </div>
  )
}

export async function getStaticProps() {
  const apiBase = "https://bhabaapi.onrender.com"
  
  try {
    const [featuredProductsRes, vendorsRes, categoriesRes] = await Promise.all([
      fetch(`${apiBase}/search?limit=100`, { 
        headers: { 'Cache-Control': 'no-cache' }
      }),
      fetch(`${apiBase}/vendors`, { 
        headers: { 'Cache-Control': 'no-cache' }
      }),
      fetch(`${apiBase}/categories`, { 
        headers: { 'Cache-Control': 'no-cache' }
      })
    ])

    const parseResponse = async (res: Response) => {
      if (!res.ok) return []
      const text = await res.text()
      try {
        return text ? JSON.parse(text) : []
      } catch (e) {
        console.error('Failed to parse response:', e)
        return []
      }
    }

    const [products, vendors, categories] = await Promise.all([
      parseResponse(featuredProductsRes),
      parseResponse(vendorsRes),
      parseResponse(categoriesRes)
    ])

    return {
      props: {
        products: Array.isArray(products?.hits) ? products.hits : Array.isArray(products) ? products : [],
        vendors: Array.isArray(vendors) ? vendors : [],
        categories: Array.isArray(categories) ? categories : [],
      },
      revalidate: 1800, // 30 minutes
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        products: [],
        vendors: [],
        categories: []
      },
      revalidate: 300, // 5 minutes on error
    }
  }
}

export default Home