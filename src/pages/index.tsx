import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@material-tailwind/react'
import LoginPage from './login'
import { NavbarDefault } from '@/components/Layout/Navbar'
import Homepage from '@/components/homepage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full'>
      <Homepage />
    </div>
  )
}
