import type { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

import { NAV_MENU } from '~/constant/nav-menu'

export const NavBar: FunctionComponent = () => {
  return (
    <nav className="pt-4 border-b-1 bg-white hidden sm:block">
      <div className="w-[95%] mx-auto flex justify-between items-center flex-wrap">
        {NAV_MENU.map((menu, index: number) => (
          <div key={index}>
            <NavLink to={menu.path} className="text-sm font-normal text-[#878787] flex items-center">
              {menu.name}

              {menu.hasChildren && (
                <ChevronDown className="mt-1 w-5" />
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  )
}
