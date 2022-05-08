import React from 'react'
import CommonRoutes from './app/Routes/CommonRoutes'
import Sidebar from './features/Common/Layout/components/Sidebar/Sidebar'
import DefaultLayout from './features/Common/Layout/DefaultLayout'

const App = () => {
  return (
    <>
      <DefaultLayout className="font-sora">
          <Sidebar />
          <CommonRoutes />
      </DefaultLayout>
    </>
  )
}

export default App