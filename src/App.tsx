import { RouterProvider } from 'react-router-dom'
import Lottie from 'lottie-react'

import { router } from '~/route/router'
import TrailLoading from '~/assets/trail-loading.json'
import { Suspense } from 'react'

const  App = () => {
  return (
    <>
    {/* <RouterProvider 
      router={router} 
      fallbackElement={
      <div className="flex items-center justify-center h-screen w-screen">
        <Lottie animationData={TrailLoading} loop={true} />
      </div>
    }
    /> */}
    
    {/* <Lottie animationData={TrailLoading} loop={true} />; */}

    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-screen">
          <Lottie animationData={TrailLoading} loop={true} />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
    </>
  )
}

export default App
