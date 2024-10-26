import { useState } from 'react'
import SvgIcon from '~/lib/svg'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  ChatBubbleLeftIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  EnvelopeIcon,
  PowerIcon,
  CursorArrowRippleIcon,
  FaceFrownIcon,
  CogIcon
} from '@heroicons/react/20/solid'
import Menus from './menu'

interface TypeMenus {
  name: string
  icon: JSX.Element
  isActive: boolean
}
;[]

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const { permissions } = useSelector((state: RootState) => state)

  const menu1 = [
    {
      name: 'Dashboard',
      icon: <HomeModernIcon width={18} className='text-blue-500' />,
      isActive: true
    },
    {
      name: 'Analytics',
      isActive: false,
      icon: <ChartPieIcon width={18} className='text-gray-600' />
    },
    {
      name: 'Notification',
      isActive: false,
      icon: <BellAlertIcon width={18} className='text-gray-600' />
    }
  ]

  const menu2 = [
    {
      name: 'Chat',
      icon: <ChatBubbleLeftIcon width={18} className='text-gray-600 ' />,
      isActive: false
    },
    {
      name: 'Notes',
      isActive: false,
      icon: <ClipboardDocumentIcon width={18} className='text-gray-600' />
    },
    {
      name: 'Customers',
      isActive: false,
      icon: <UsersIcon width={18} className='text-gray-600' />
    },
    {
      name: 'Mail',
      isActive: false,
      icon: <EnvelopeIcon width={18} className='text-gray-600' />
    }
  ]

  const menu3 = [
    {
      name: 'Login',
      icon: <PowerIcon width={18} className='text-gray-600' />,
      isActive: false
    },
    {
      name: 'Register',
      isActive: false,
      icon: <CursorArrowRippleIcon width={18} className='text-gray-600' />
    },
    {
      name: 'Error',
      isActive: false,
      icon: <FaceFrownIcon width={18} className='text-gray-600' />
    }
  ]

  return (
    <div>
      <section className='w-20 sm:w-64 bg-slate-100 h-screen'>
        <div className='border-b p-5 text-center sm:text-left'>
          <span className='hidden sm:block'>Dashboard UI</span>
          <span className='sm:hidden'>DUI</span>
        </div>
        {[
          { arr: menu1, sm: 'BUSINESS', xs: 'BUSINESS' },
          { arr: menu2, sm: 'APPLICATION', xs: 'APP' },
          { arr: menu3, sm: 'AUTHENTICATION', xs: 'AUTH' }
        ].map(({arr, sm, xs}) => (
          <div className=' border-b text-sm' key={sm}>
            <Menus menu={arr} title={{ sm, xs }} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Sidebar
