import type { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

import { NavBar, TopNavBar } from '~/modules/shared'

const Applayout: FunctionComponent = () => {
  return (
    <div className="h-screen">
      {/* Top nav - scrolls away normally */}
      <div className="w-full mb-2 sticky top-0 z-12">
        <TopNavBar />
      </div>

      {/* Bottom nav - stays sticky */}
      <div className="w-full mb-8 border-2 sticky top-0 z-16">
        <NavBar />
      </div>

      {/* Page content */}
      <main className="sm:w-[75%] w-[95%] mx-auto pb-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Applayout;