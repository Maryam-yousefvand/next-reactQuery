import '../styles/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '../components/layout/Layout';
import { useEffect } from 'react';
import { getSingleMeal } from './meals/[id]';
import { queryClient } from '../api';



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
