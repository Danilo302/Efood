import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getFeaturedMenu: builder.query<Restaurant, string>({
      query: (id) => `${id}`
    })
  })
})

export const { useGetFeaturedRestaurantQuery, useGetFeaturedMenuQuery } = api
export default api
