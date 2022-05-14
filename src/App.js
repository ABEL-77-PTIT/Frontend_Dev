import React from 'react'
import CommonRoutes from './app/Routes/CommonRoutes'
import DefaultLayout from './features/Common/Layout/DefaultLayout'

const App = () => {
  return (
    <>
      <DefaultLayout className="font-sora overflow-hidden">
          <CommonRoutes />
      </DefaultLayout>
    </>
  )
}

export default App