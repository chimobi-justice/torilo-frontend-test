import type { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { AlignRight, ChevronDown } from 'lucide-react'

import { Separator } from '~/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer"

import Applogo from '~/assets/images/logo.svg'
import HouseIcon from '~/assets/images/house.svg'
import HomeIcon from '~/assets/images/home.svg'
import WarnIcon from '~/assets/images/warning.svg'
import BellIcon from '~/assets/images/bell.svg'
import { NAV_MENU } from '~/constant/nav-menu'

export const TopNavBar: FunctionComponent = () => {
  return (
    <>
      <div className="w-[95%] mx-auto flex justify-between items-center pb-2 border-b-[2px] border-[#FAFAFA] bg-white">
        <div>
          <Link to={"/dashboard"}>
            <img src={Applogo} className="w-[80px] sm:w-[150px]" />
          </Link>
        </div>

        <div className="flex sm:gap-2 gap-4 p-2 items-center">
          <div className="flex gap-7 p-2 items-center">
            <img src={HouseIcon} alt="" className="w-[20px] sm:w-[25px]" />
            <img src={HomeIcon} alt="" className="w-[20px] sm:w-[25px]" />
            <img src={WarnIcon} alt="" className="w-[20px] sm:w-[25px]" />
            <img src={BellIcon} alt="" className="w-[20px] sm:w-[25px]" />
          </div>

          <Separator orientation="vertical" className="h-20 w-20" />

          <div className="flex h-8 items-center space-x-2 sm:space-x-4 text-sm">
            <Separator orientation="vertical" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="rounded-sm cursor-pointer overflow-hidden">
                  <img src="https://i.pravatar.cc/400?u=1" className="w-[28px] sm:w-[30px]" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="sm:hidden block">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <AlignRight cursor={"pointer"} size={"30px"} />
              </DrawerTrigger>

              <DrawerContent className="border-2 overflow-y-scroll">
                <DrawerHeader>
                  <DrawerTitle className="hidden"></DrawerTitle>
                  <DrawerDescription className="hidden"></DrawerDescription>

                  <Link to={"/dashboard"}>
                    <img src={Applogo} className="w-[130px]" />
                  </Link>
                </DrawerHeader>

                <div className="p-4 flex flex-col gap-6">
                  {NAV_MENU.map((menu, index: number) => (
                    <Link to={menu.path} key={index} className="flex items-center">
                      {menu.name}

                      {menu.hasChildren && (
                        <ChevronDown className="mt-1 w-5" />
                      )}
                    </Link>
                  ))}
                </div>

                <DrawerFooter>
                  <DrawerClose className="text-sm text-gray-600 cursor-pointer">
                    Close
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  )
}
