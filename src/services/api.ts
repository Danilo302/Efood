import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getFeaturedMenu: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetFeaturedRestaurantQuery, useGetFeaturedMenuQuery } = api
export default api
