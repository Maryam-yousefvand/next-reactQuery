
import { QueryClient } from "@tanstack/react-query";
import axios from 'axios'
export const client = axios.create({baseURL:"https://www.themealdb.com/api/json/v1/1"})

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1 * 60 * 60 * 1000,
        staleTime: 1 * 60 * 60 * 1000,
      },
    },
  });