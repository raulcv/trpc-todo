import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { useState } from 'react'
import { trpc } from "../utils/trpc"
import AppContent from './AppContent'

function App() {
const [queryClient] = useState(()=> new QueryClient())
const [trpcClient] = useState(()=>
trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3006/trpc',
      /**
       * Optional if require authentication example
       */
      headers() {
        return {
          authorization: "*"//getAuthCookie()
        };
      },

    }),
  ],
}),
);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent/>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
