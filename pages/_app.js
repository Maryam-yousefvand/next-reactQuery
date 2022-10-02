import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '../components/layout/Layout';
import { useEffect } from 'react';
import { getSingleMeal } from './meals/[id]';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(localStorage.getItem("savedMeals")){
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals"))
      savedMeals.forEach((idMeal)=> {
        queryClient.prefetchQuery(['singleMeal', idMeal], getSingleMeal)
      })
    }else{
      localStorage.setItem("savedMeals" , JSON.stringify([]))
    }
    
  
   
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>

      <Toaster
        position="bottom-right"
        toastOptions={{
          toastOptins: {
            style: {
              fontSize: '1.4rem',
            },
          },
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  );
}

export default MyApp;
